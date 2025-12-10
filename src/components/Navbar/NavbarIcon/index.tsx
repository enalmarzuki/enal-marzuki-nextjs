'use client';
import { motion } from 'motion/react';

const NavbarIcon = () => {
  return (
    <motion.img
      src='/ic-em.svg'
      alt='An SVG of an eye'
      width={40}
      height={40}
      animate={{
        scale: [0, 1],
        opacity: [0, 1],
      }}
      transition={{
        duration: 0.5,
      }}
    />
  );
};

export default NavbarIcon;
