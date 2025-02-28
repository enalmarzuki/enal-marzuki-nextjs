import { ForwardRefComponent, HTMLMotionProps, motion } from 'motion/react';
import React from 'react';

interface AnimatedImageProps extends HTMLMotionProps<'img'> {
  onComplete: VoidFunction;
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({
  onComplete,
  ...props
}) => {
  return (
    <motion.img
      {...props}
      initial={{
        opacity: 0,
        scale: 0,
        position: 'absolute',
        top: '50%',
        left: '50%',
        x: '-50%',
        y: '-50%',
      }}
      src={props.src}
      animate={{
        scale: [0, 1, 1, 0],
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 2,
        ease: 'easeInOut',
        times: [0, 0.25, 0.75, 1],
      }}
      onAnimationComplete={onComplete}
    />
  );
};

export default AnimatedImage;
