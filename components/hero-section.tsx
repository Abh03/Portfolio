"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion"

// The TypewriterEffect component remains the same
const TypewriterEffect = () => {
  const [text, setText] = useState('');
  const fullText = `[~]$ python3 main.py\nInitializing model...\nLoading weights for   ✨Abhyudit.Adhikari✨...\nKernel ready. Welcome.\n\nScroll Down for Magic...`;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 15);

    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <div className="text-left font-mono text-xl md:text-2xl text-black whitespace-pre-wrap">
      {text}
      <span className="animate-ping">_</span>
    </div>
  );
};


export function HeroSection({ onAnimationComplete }: { onAnimationComplete: (isComplete: boolean) => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  // --- POSITIONING CONFIGURATION ---
  // Change these values to set the STARTING position of the text.
  // Positive X = Right, Negative X = Left
  // Positive Y = Down, Negative Y = Up
  const initialX = "50%"; 
  const initialY = "40%";
  // --------------------------------

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Create a smoothed spring value for scroll progress to provide "inertia"
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 25,
    damping: 30,
    restDelta: 0.001
  });

  // Map progress to various animation values
  const fontSize = useTransform(smoothProgress, [0, 0.5], ["300vw", "6vw"]);
  
  // Animate from initial position to exact center (0%)
  const xPos = useTransform(smoothProgress, [0, 0.5], [initialX, "0%"]);
  const yPos = useTransform(smoothProgress, [0, 0.5], [initialY, "0%"]);

  const typewriterOpacity = useTransform(smoothProgress, [0, 0.05], [1, 0]);
  const finalBackgroundOpacity = useTransform(smoothProgress, [0.3, 0.5], [0, 1]);

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    if (onAnimationComplete) {
      onAnimationComplete(latest >= 0.99);
    }
  });

  return (
    <div ref={containerRef} className="relative h-[300vh]">
      {/* Fixed container ensures the cutout stays centered regardless of scroll position */}
      <div className="fixed top-0 left-0 h-screen w-full overflow-hidden pointer-events-none">
        {/* Layer 1: The original background image */}
        <div className="absolute inset-0 z-0 hero-bg-layer" />
        
        {/* Layer 2: Final background that fades in */}
        <motion.div
          className="absolute inset-0 z-10 final-bg-layer"
          style={{
            opacity: finalBackgroundOpacity,
          }}
        />

        {/* Typewriter text layer */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center z-30"
          style={{ opacity: typewriterOpacity }}
        >
          {isMounted && <TypewriterEffect />}
        </motion.div>

        {/* Layer 3: The dark overlay with the text cutout */}
        <div 
          className="absolute inset-0 z-20" 
          style={{ 
            backgroundColor: "#0A0A14",
          }}
        >
          {/* Centered container for the text cutout */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <motion.h1
              className="font-black leading-none text-center select-none hero-bg-layer"
              style={{
                fontSize,
                fontFamily: "'Gore'", 
                opacity: 1,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
                // Use relative positioning to shift the text without breaking the fixed background
                position: "relative",
                left: xPos,
                top: yPos,
              }}
            >
              ABHYUDIT
            </motion.h1>
          </div>
        </div>
      </div>
    </div>
  )
}