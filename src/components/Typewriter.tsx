import React from 'react';
import { motion } from 'motion/react';

interface TypewriterProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
}

export default function Typewriter({ 
  text, 
  delay = 0, 
  speed = 0.015,
  className = "" 
}: TypewriterProps) {
  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10px" }}
      variants={{
        hidden: { opacity: 1 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: speed, delayChildren: delay }
        }
      }}
      className={className}
    >
      {text.split("").map((char, i) => (
        <motion.span 
          key={i} 
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}
