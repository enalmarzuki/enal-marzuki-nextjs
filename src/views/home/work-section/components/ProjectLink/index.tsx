import IcLock from '@/assets/icons/ic-lock';
import IcVisit from '@/assets/icons/ic-visit';
import Link from 'next/link';
import React, { PropsWithChildren } from 'react';

interface ProjectLinkProps {
  href: string | null;
}

const ProjectLink: React.FC<PropsWithChildren<ProjectLinkProps>> = ({
  href,
  ...props
}) => {
  return (
    <>
      {href && (
        <Link
          href={href}
          target='_blank'
          className='mb-2 flex items-center gap-2.5 hover:text-gray-300'
        >
          <h3 className='text-xl font-semibold'>{props.children}</h3>
          <IcVisit className='size-5' />
        </Link>
      )}

      {!href && (
        <div className='mb-2 flex items-center gap-2.5'>
          <h3 className='text-xl font-semibold'>{props.children}</h3>
          <IcLock className='size-5' />
        </div>
      )}
    </>
  );
};

export default ProjectLink;
