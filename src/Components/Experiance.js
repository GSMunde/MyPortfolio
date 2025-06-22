import React from 'react';
import ExperienceBox from './ExperienceBox';

const Experience = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Experience</b></h1>
      <div className='project'>
        <ExperienceBox
          role="Associate Software Engineer - Frontend"
          company="Hue Logics"
          date="March 2025 – Present"
          expKey="HueLogicsDesc"
        />
        <ExperienceBox
          role="Software Engineer Intern"
          company="Dihaari"
          date="Dec 2024 – Jan 2025"
          expKey="DihaariDesc"
        />
      </div>
    </div>
  );
};

export default Experience;
