// AnimatedScreen.js
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface AnimatedScreenProps {
  children: ReactNode;
}
const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 },
};

const AnimatedScreen = ({ children }: AnimatedScreenProps) => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ duration: 0.7 }}
      className="h-full w-full"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedScreen;
