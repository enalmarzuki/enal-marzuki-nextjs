import React from 'react';

interface ExperienceTitleProps {
  role: string;
  company: string;
  date: string;
}

const ExperienceTitle: React.FC<ExperienceTitleProps> = ({
  role,
  company,
  date,
}) => {
  return (
    <div className='flex flex-col'>
      <h4 className='mb-2 flex text-lg font-bold'>{role}</h4>
      <p className='font-roboto text-base font-semibold'>{company}</p>
      <p className='font-roboto text-sm'>{date}</p>
    </div>
  );
};

export default ExperienceTitle;
