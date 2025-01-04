import React from 'react';
import ProjectBox from './ProjectBox';
import MyBoutique from "../Images/MyBoutque.png"
import AmazonClone from "../Images/AmazonClone.png"
import SwiggyClone from "../Images/SwiggyClone.png"
import TaylorMeals from "../Images/TaylorMeals.png"


const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={MyBoutique} projectName="MyBoutique" />
        <ProjectBox projectPhoto={AmazonClone} projectName="AmazonClone" />
        <ProjectBox projectPhoto={SwiggyClone} projectName="SwiggyClone" />
        <ProjectBox projectPhoto={TaylorMeals} projectName="TaylorMeals" />
      </div>

    </div>
  )
}

export default Projects