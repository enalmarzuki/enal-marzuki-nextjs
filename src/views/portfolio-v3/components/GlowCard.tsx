'use client';

import cx from 'classnames';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useRef } from 'react';

export const GlowCard = ({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const background = useTransform(
    [springX, springY],
    ([x, y]) =>
      `radial-gradient(400px circle at ${x}px ${y}px, rgba(16,185,129,0.06), transparent 70%)`,
  );

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      style={{ background }}
      onClick={onClick}
      className={cx(
        'group relative overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-950/50 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/30',
        onClick &&
          'cursor-pointer hover:scale-[1.01] hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/5',
        className,
      )}
    >
      {children}
    </motion.div>
  );
};
