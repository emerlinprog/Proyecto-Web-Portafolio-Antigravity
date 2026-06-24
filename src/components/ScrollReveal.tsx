import React from "react";
import { motion } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export const ScrollReveal = ({ 
  children, 
  width = "100%", 
  delay = 0,
  direction = "up"
}: ScrollRevealProps) => {
  const directionOffset = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  return (
    <div style={{ position: "relative", width, overflow: "visible" }}>
      <motion.div
        variants={{
          hidden: { 
            opacity: 0, 
            y: directionOffset[direction].y,
            x: directionOffset[direction].x,
            filter: "blur(10px)"
          },
          visible: { 
            opacity: 1, 
            y: 0,
            x: 0,
            filter: "blur(0px)"
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ 
          duration: 0.8, 
          delay: delay,
          ease: [0.21, 1.11, 0.81, 0.99] // Smooth overshoot ease
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
