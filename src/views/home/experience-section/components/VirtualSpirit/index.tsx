import React from 'react';
import ExperienceTitle from '../ExperienceTitle';
import ExperienceBullet from '../ExperienceBullet';

const VirtualSpirit = () => {
  return (
    <>
      <ExperienceTitle
        role='Frontend Developer - VirtualSpace Platform'
        company='Virtual Spirit Technology Sdn. Bhd.'
        date='Nov 2022 - Sep 2024'
      />

      <div className='mt-4'>
        <ExperienceBullet>
          Developed and maintained core task management features on the
          <span className='font-medium text-white'>
            &nbsp;VirtualSpace Platform,&nbsp;
          </span>
          ensuring scalability and reliability across different use case and
          efficient workflow.
        </ExperienceBullet>
        <ExperienceBullet>
          Optimized the performance of the task list component by implementing
          efficient rendering strategies and improving data handling, resulting
          in a smoother user experience.
        </ExperienceBullet>
        <ExperienceBullet>
          Integrated real-time updates for the task management system using
          <span className='font-medium text-white'>&nbsp;AnyCable,&nbsp;</span>
          enabling seamless live collaboration between users.
        </ExperienceBullet>
        <ExperienceBullet>
          Built and maintained various components in the form builder and
          storage modules, contributing to the platform’s flexibility in
          creating dynamic forms and managing user-generated content
          effectively.
        </ExperienceBullet>
        <ExperienceBullet>
          Contributed to the chat feature by handling UI adjustments and fixing
          minor bugs to improve user experience and interface consistency.
        </ExperienceBullet>
      </div>
    </>
  );
};

export default VirtualSpirit;
