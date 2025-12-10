import React from 'react';
import cx from 'classnames';

interface ButtonIconWithLabel extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

const ButtonIconWithLabel: React.FC<ButtonIconWithLabel> = ({
  iconLeft,
  iconRight,
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={cx(
        'flex w-full cursor-pointer items-center justify-center gap-3 whitespace-nowrap rounded-md border border-blue-950 bg-blue-950/50 px-4 py-3 text-base text-gray-300 transition-all duration-300 hover:bg-blue-950/70 md:w-fit',
        className,
      )}
      {...props}
    >
      {iconLeft && <span>{iconLeft}</span>}
      <span>{children}</span>
      {iconRight && <span>{iconRight}</span>}
    </button>
  );
};

export default ButtonIconWithLabel;
