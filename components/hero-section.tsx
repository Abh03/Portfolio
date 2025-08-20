"use client"

import { useEffect, useState } from "react"

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
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setWindowHeight(window.innerHeight);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const maxScroll = windowHeight * 2;
  const scrollProgress = maxScroll > 0 ? Math.min(scrollY / maxScroll, 1) : 0;
  
  const fontSize = Math.max(900 - scrollProgress * 900, 9); 
  const textMarginTop = -scrollProgress * 20;
  
  const finalTitleOpacity = scrollProgress > 0.95 
    ? 1 - (scrollProgress - 0.95) * 20 
    : 1; 
    
  const typewriterOpacity = Math.max(1 - scrollProgress*1.5, 0);

  // --- START OF NEW LOGIC ---
  // This calculates the opacity for the final background.
  // It starts fading in at 80% scroll and is fully visible at 100%.
  const finalBackgroundOpacity = scrollProgress > 0.8 
    ? (scrollProgress - 0.8) * 5 
    : 0;
  // --- END OF NEW LOGIC ---
  useEffect(() => {
    if (onAnimationComplete) {
      onAnimationComplete(scrollProgress >= 1);
    }
  }, [scrollProgress, onAnimationComplete]);


  if (!isMounted) {
    return <div style={{ height: "300vh" }} />;
  }

  return (
    <div className="sticky top-0 h-[300vh]">
      {/* Layer 1: The original background image for the text window */}
      <div
        className="fixed top-0 left-0 w-screen h-screen z-0"
        style={{
          backgroundImage: `url('/light-tech-circuit.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      
      {/* --- START OF CHANGES --- */}
      {/* This is now the ONLY background layer the user sees. It fades in. */}
      <div
        className="fixed top-0 left-0 w-screen h-screen z-10"
        style={{
          backgroundImage: `url("/window-bg.png")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: finalBackgroundOpacity,
        }}
      />
      {/* --- END OF CHANGES --- */}

      <div 
        className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-30"
        style={{ opacity: typewriterOpacity, pointerEvents: 'none' }}
      >
        <TypewriterEffect />
      </div>

      {/* Layer 2 is now Layer 3: The dark overlay with the text cutout */}
      <div 
        className="fixed top-0 left-0 w-screen h-screen z-20" 
        style={{ 
          backgroundColor: "#0A0A14",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <h1
            className="font-black leading-none text-center select-none pointer-events-none"
            style={{
              fontSize: `${fontSize}vw`,
                            fontFamily: "'Pricedown'", // Apply the Pricedown font

              marginTop: `${textMarginTop}vh`,
              opacity: 1,
              backgroundImage: `url('/light-tech-circuit.png')`,
              backgroundAttachment: "fixed",
              backgroundSize: "cover",
              backgroundPosition: "center",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
            <div className="block">&nbsp;ABHYUDIT</div>
          </h1>
        </div>
      </div>

      {/* Final positioned title */}
      {scrollProgress > 0.95 && (
        <div 
          className="fixed bottom-85 left-1/2 transform -translate-x-1/2 z-30"
          style={{  }}
        >
          <h1 className="text-4xl font-black text-[#00FFFF] text-center"></h1>
        </div>
      )}
    </div>
  )
}