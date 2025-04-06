import React from 'react';
import ExperienceTitle from '../ExperienceTitle';
import ExperienceBullet from '../ExperienceBullet';

const HukumDigital = () => {
  return (
    <>
      <ExperienceTitle
        role='Frontend Developer (Intern)'
        company='PT Hukum Digital Indonesia'
        date='Jan 2021 - Mar 2021'
      />
      <div className='mt-4'>
        <ExperienceBullet>
          Designed and developed the HukumDigital.com website from scratch,
          ensuring a clean and user-friendly interface.
        </ExperienceBullet>
        <ExperienceBullet>
          Converted UI/UX designs into high-quality code using
          <span className='font-medium text-white'>&nbsp;ReactJS&nbsp;</span>
          and
          <span className='font-medium text-white'>
            &nbsp;TailwindCSS.&nbsp;
          </span>
        </ExperienceBullet>
        <ExperienceBullet>
          Collaborated with the backend team to integrate RESTful APIs, ensuring
          seamless data flow and dynamic content across the platform.
        </ExperienceBullet>
      </div>
    </>
  );
};

export default HukumDigital;
