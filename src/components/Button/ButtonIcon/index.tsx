import React, { HTMLAttributes, PropsWithChildren } from 'react';
import cx from 'classnames';

interface ButtonIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ButtonIcon: React.FC<ButtonIconProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={cx(
        'flex cursor-pointer items-center gap-2.5 rounded-full bg-black/30 p-2 transition-all duration-300 hover:bg-black/50 disabled:cursor-not-allowed disabled:text-white/50',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonIcon;
