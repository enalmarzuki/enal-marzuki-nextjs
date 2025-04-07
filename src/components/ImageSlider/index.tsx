import IcArrow from '@/assets/icons/ic-arrow';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import React, { useState } from 'react';
import cx from 'classnames';
import ButtonIcon from '@/components/Button/ButtonIcon';

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [indexIndicator, setIndexIndicator] = useState(0);

  const onNextProject = () => {
    if (indexIndicator < images.length - 1) {
      setIndexIndicator((prev) => prev + 1);
    }
  };

  const onPrevProject = () => {
    if (indexIndicator > 0) {
      setIndexIndicator((prev) => prev - 1);
    }
  };

  return (
    <div className='relative h-full w-full overflow-hidden'>
      <AnimatePresence mode='wait'>
        <motion.div
          className='h-full w-full rounded-lg'
          key={indexIndicator}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Image
            src={images[indexIndicator]}
            alt={images[indexIndicator]}
            width={400}
            height={400}
            objectFit='cover'
            className='h-full w-full rounded-lg'
            loading='lazy'
          />
        </motion.div>
      </AnimatePresence>

      <div className='absolute bottom-2 z-10 flex w-full justify-between px-2 md:bottom-4 md:px-6'>
        <ImageSliderIndicator
          indexIndicator={indexIndicator}
          onClickIndicator={setIndexIndicator}
          images={images}
        />
        <div className='flex items-center gap-1'>
          <ButtonIcon disabled={indexIndicator === 0} onClick={onPrevProject}>
            <IcArrow className='size-4 md:size-6' />
          </ButtonIcon>
          <ButtonIcon
            disabled={indexIndicator === images.length - 1}
            onClick={onNextProject}
          >
            <IcArrow className='size-4 rotate-180 md:size-6' />
          </ButtonIcon>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;

interface ImageSliderIndicatorProps extends ImageSliderProps {
  indexIndicator: number;
  onClickIndicator: (indexIndicator: number) => void;
}

const ImageSliderIndicator: React.FC<ImageSliderIndicatorProps> = ({
  images,
  indexIndicator,
  onClickIndicator,
}) => {
  return (
    <div className='flex items-center gap-2'>
      {[...Array(images.length)].map((_, idx: number) => (
        <span
          key={idx}
          className={cx('size-2 cursor-pointer rounded-full', {
            'bg-cyan-300': idx === indexIndicator,
            'bg-black/30': idx !== indexIndicator,
          })}
          onClick={() => onClickIndicator(idx)}
        ></span>
      ))}
    </div>
  );
};
