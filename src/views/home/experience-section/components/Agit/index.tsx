import React from 'react';
import ExperienceTitle from '../ExperienceTitle';
import ExperienceBullet from '../ExperienceBullet';

const AgitSection = () => {
  return (
    <>
      <ExperienceTitle
        role='Frontend Team Leader'
        company='PT. Astra Graphia Information Technology (AGIT)'
        date='Jan 2023 - Present'
      />
      <div className='mt-4'>
        <ExperienceBullet>
          Collaborated in breaking down new feature requests into detailed
          tickets, ensuring clear documentation of both functional and technical
          requirements.
        </ExperienceBullet>

        <ExperienceBullet>
          Managed and tracked team tasks to support an organized and efficient
          development workflow.
        </ExperienceBullet>

        <ExperienceBullet>
          Conducted code reviews for fellow Frontend Developers to maintain
          coding standards and architectural consistency.
        </ExperienceBullet>

        <ExperienceBullet>
          Built and enhanced features using
          <span className='font-medium text-white'>&nbsp;ReactJS&nbsp;</span>
          with
          <span className='font-medium text-white'>&nbsp;MobX&nbsp;</span>
          for state management and
          <span className='font-medium text-white'>&nbsp;GraphQL&nbsp;</span>
          as the service layer.
        </ExperienceBullet>

        <ExperienceBullet>
          Customized
          <span className='font-medium text-white'>&nbsp;Ant Design&nbsp;</span>
          components to meet specific design systems and functional needs of the
          application.
        </ExperienceBullet>

        <ExperienceBullet>
          Developed several reusable components to improve development
          efficiency and maintain consistency across the application.
        </ExperienceBullet>
      </div>
    </>
  );
};

export default AgitSection;
