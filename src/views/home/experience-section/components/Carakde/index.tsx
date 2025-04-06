import React from 'react';
import ExperienceTitle from '../ExperienceTitle';
import ExperienceBullet from '../ExperienceBullet';

const Carakde = () => {
  return (
    <>
      <ExperienceTitle
        role='Frontend Developer'
        company='PT Carakde Solusi Informatika'
        date='Mar 2021 - Jan 2022'
      />
      <div className='mt-4'>
        <ExperienceBullet>
          Developed and maintained multiple web projects, including Pondok
          Vaksin, Praktek Dr. Bob, and others, focusing on delivering
          user-friendly and functional interfaces.
        </ExperienceBullet>
        <ExperienceBullet>
          Integrated frontend with backend services using RESTful APIs, ensuring
          reliable and efficient data communication.
        </ExperienceBullet>
        <ExperienceBullet>
          Created and maintained reusable components for the Pondok Vaksin
          project to streamline development and maintain UI consistency.
        </ExperienceBullet>
      </div>
    </>
  );
};

export default Carakde;
