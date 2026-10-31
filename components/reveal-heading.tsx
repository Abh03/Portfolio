"use client";

import { motion, useReducedMotion } from "framer-motion";

export function RevealHeading({ text, accent }: { text: string; accent?: string }) {
  const reduce = useReducedMotion();
  return <h2 className="reveal-heading" aria-label={`${text} ${accent ?? ""}`}><span className="reveal-line">{text.split(" ").map((word, index) => <span className="word-clip" key={`${word}-${index}`}><motion.span aria-hidden="true" initial={reduce ? false : { y: "110%", rotate: 5, filter: "blur(8px)" }} whileInView={{ y: "0%", rotate: 0, filter: "blur(0px)" }} viewport={{ once: true, amount: .5 }} transition={{ duration: .68, delay: index * .09, ease: [.2,.8,.2,1] }}>{word}</motion.span></span>)}</span>{accent && <span className="reveal-accent">{accent}</span>}</h2>;
}
