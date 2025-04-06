import React from 'react';
import ExperienceTitle from '../ExperienceTitle';
import ExperienceBullet from '../ExperienceBullet';

const Gramedia = () => {
  return (
    <>
      <ExperienceTitle
        role='Frontend Developer'
        company='Kompas Gramedia'
        date='Jan 2023 - Jun 2023'
      />
      <div className='mt-4'>
        <ExperienceBullet>
          Contributed to the development of a Web Reader application, focusing
          on delivering a responsive and intuitive user experience.
        </ExperienceBullet>
        <ExperienceBullet>
          Developed and maintained reusable components to ensure consistency,
          scalability, and efficiency across the codebase.
        </ExperienceBullet>
        <ExperienceBullet>
          Integrated frontend features with RESTful APIs, enabling seamless
          communication with backend services and improving overall app
          performance.
        </ExperienceBullet>
      </div>
    </>
  );
};

export default Gramedia;
