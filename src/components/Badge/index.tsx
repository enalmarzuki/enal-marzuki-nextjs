import React from 'react';

type BadgeProps = React.HTMLAttributes<HTMLSpanElement>;

const Badge: React.FC<BadgeProps> = ({ children, ...props }) => {
  return (
    <div
      className='flex h-5 items-center justify-center rounded-full border bg-blue-950/50 px-3 py-3'
      {...props}
    >
      <span className='font-roboto text-sm text-gray-300'>{children}</span>
    </div>
  );
};

export default Badge;
