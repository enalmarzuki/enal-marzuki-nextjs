import React, { JSX } from 'react';

import cx from 'classnames';

interface TabsProps {
  menu: string[];
  currentActive?: string;
  onChange: (menu: string) => void;
}

const Tabs: React.FC<TabsProps> = (props): JSX.Element => {
  return (
    <ul className='col-span-12 inline-flex overflow-x-auto whitespace-nowrap text-xs sm:col-span-3 sm:flex sm:flex-col md:col-span-3 lg:col-span-4 xl:col-span-3'>
      {props.menu.map((menu, index) => {
        const isActive = props.currentActive === menu;
        return (
          <li
            onClick={() => props.onChange(menu)}
            key={index}
            className={cx(
              'w-fit cursor-pointer border-b-2 border-l-0 px-3 py-4 font-roboto text-sm transition-all duration-300 ease-in-out sm:border-b-0 sm:border-l-2 sm:py-2',
              {
                'border-cyan-300 font-semibold text-cyan-300': isActive,
                'border-white/60 text-white/60': !isActive,
              },
            )}
          >
            {menu}
          </li>
        );
      })}
    </ul>
  );
};

export default Tabs;
