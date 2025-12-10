'use client';

import { motion } from 'motion/react';
import cx from 'classnames';

interface BlobProps {
  position: 'top-left' | 'bottom-right';
}

const BackgroundBlob: React.FC<BlobProps> = ({ position }) => {
  const isTopLeft = position === 'top-left';

  const animation = isTopLeft
    ? { top: [-381, -331, -381], left: [-393, -303, -393] }
    : { bottom: [-510, -400, -510], right: [-253, -283, -253] };

  return (
    <motion.div
      animate={animation}
      transition={{ repeat: Infinity, duration: 8 }}
      className={cx(
        'fixed -z-10 h-[810px] w-[810px] rounded-full bg-[#072A4850] blur-[176.9px]',
        {
          '-left-[393px] -top-[381px]': isTopLeft,
          '-bottom-[510px] -right-[213px]': !isTopLeft,
        },
      )}
    />
  );
};

export default BackgroundBlob;
