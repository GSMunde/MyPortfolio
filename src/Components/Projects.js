import React from 'react';
import ProjectBox from './ProjectBox';
import MyBoutique from "../Images/MyBoutque.png"
import AmazonClone from "../Images/AmazonClone.png"
const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={MyBoutique} projectName="MyBoutique" />
        <ProjectBox projectPhoto={AmazonClone} projectName="AmazonClone" />
      </div>

    </div>
  )
}

export default Projects