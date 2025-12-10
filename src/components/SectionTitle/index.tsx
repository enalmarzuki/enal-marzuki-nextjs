import cx from 'classnames';
import React, { HTMLAttributes, PropsWithChildren } from 'react';

type SectionTitle = PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>;

const SectionTitle: React.FC<SectionTitle> = ({ children, ...props }) => {
  return (
    <div className='relative mb-3 inline-block'>
      <h3 className={cx('text-2xl font-semibold', props.className)}>
        {children}
      </h3>
      <div className='absolute -bottom-1 left-0 h-[2px] w-10 animate-shimmer rounded bg-gradient-to-r from-cyan-300 via-purple-500 to-cyan-300 bg-[length:200%_100%]' />
    </div>
  );
};

export default SectionTitle;
