"use client";

import clsx from "clsx";
import { motion, Variants } from "motion/react";
import { ReactNode } from "react";

type Animation = "fade" | "up" | "down" | "left" | "right" | "scale";

interface MotionWrapperProps {
  children: ReactNode;
  className?: string;

  animation?: Animation;

  delay?: number;

  duration?: number;

  distance?: number;

  once?: boolean;
}

export default function MotionWrapper({ children, className, animation = "up", delay = 0, duration = 0.6, distance = 40, once = true }: MotionWrapperProps) {
  const variants: Record<Animation, Variants> = {
    fade: {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
      },
    },

    up: {
      hidden: {
        opacity: 0,
        y: distance,
      },
      visible: {
        opacity: 1,
        y: 0,
      },
    },

    down: {
      hidden: {
        opacity: 0,
        y: -distance,
      },
      visible: {
        opacity: 1,
        y: 0,
      },
    },

    left: {
      hidden: {
        opacity: 0,
        x: distance,
      },
      visible: {
        opacity: 1,
        x: 0,
      },
    },

    right: {
      hidden: {
        opacity: 0,
        x: -distance,
      },
      visible: {
        opacity: 1,
        x: 0,
      },
    },

    scale: {
      hidden: {
        opacity: 0,
        scale: 0.9,
      },
      visible: {
        opacity: 1,
        scale: 1,
      },
    },
  };

  return (
    <motion.div
      className={clsx(className)}
      variants={variants[animation]}
      initial="hidden"
      whileInView="visible"
      viewport={{
        amount: 0.1,
      }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
}
