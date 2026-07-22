import React from "react";
import { motion, useReducedMotion } from "framer-motion";

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
  const reduceMotion = useReducedMotion();

  // Reduced-motion: render in place, no transform/opacity choreography.
  if (reduceMotion) {
    return <div style={{ position: "relative", width }}>{children}</div>;
  }

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
          // Only opacity + transform animate. No filter:blur — animating blur
          // over full-height sections is the main scroll-jank source.
          hidden: {
            opacity: 0,
            y: directionOffset[direction].y,
            x: directionOffset[direction].x,
          },
          visible: {
            opacity: 1,
            y: 0,
            x: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        // Trigger a touch earlier so tall blocks don't pop in late.
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{
          duration: 0.7,
          delay: delay,
          ease: [0.16, 1, 0.3, 1] // ease-out-expo (DESIGN.md ease-premium) — no overshoot
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
