import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Geetanjali Munde</b> and I am from Maharashtra, India.
            I'm a <b>Front-End web developer</b> and in 3rd year of Electrical and Electronic Engineering from  <b>dr. Babasaheb Ambedkar Marathwada University Aurangabad, Maharashtra</b>. <br/><br/>
            I love to create original projects with beautiful designs, you can check out some of my work in the projects section.<br/><br/>
            and Also I am passionate about crafting visually captivating web interfaces that deliver high-quality solutions. My commitment lies in creating exceptional digital experiences through innovative frontend development.
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/>
            Apart from coding I love to do Listening Music
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
      <Skills skill='React' />
        <Skills skill='Redux' />
        <Skills skill='HTML' />
        <Skills skill='CSS' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='ChakraUI' />
        <Skills skill='Postman' />
        <Skills skill='Figma' />
        <Skills skill='Vercel' />
        <Skills skill='Npm' />
        <Skills skill='Bootstrap'/>
        
      </div>
    </>
  )
}

export default About