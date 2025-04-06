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
      <p className='roboto-mono text-base font-semibold'>{company}</p>
      <p className='roboto-mono text-sm'>{date}</p>
    </div>
  );
};

export default ExperienceTitle;
