"use client";
import { motion } from "framer-motion";

export const BlurText = ({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) => {
  const words = text.split(" ");

  return (
    <motion.h1
      className={`flex flex-wrap gap-2 ${className}`}
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.1, delayChildren: delay } },
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { filter: "blur(10px)", opacity: 0, y: 20 },
            visible: {
              filter: "blur(0px)",
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            },
          }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
};
