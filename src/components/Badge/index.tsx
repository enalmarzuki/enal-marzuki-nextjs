import React, { HTMLAttributes } from 'react';

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {}

const Badge: React.FC<BadgeProps> = ({ children, ...props }) => {
  return (
    <div
      className='flex h-5 items-center justify-center rounded-full border bg-blue-950/50 px-3 py-3'
      {...props}
    >
      <span className='roboto-mono text-sm text-gray-300'>{children}</span>
    </div>
  );
};

export default Badge;
