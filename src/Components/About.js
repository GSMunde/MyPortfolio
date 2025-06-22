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
            I’m <b>Geetanjali Munde</b> from Maharashtra, India — a passionate <b>Frontend Web Developer</b> currently in my 3rd year of <b>Electrical and Electronics Engineering</b> at Dr. Babasaheb Ambedkar Marathwada University, Aurangabad.<br /><br />

            I specialize in building visually appealing and performance-optimized web interfaces using <b>React.js</b>, <b>Redux</b>, <b>JavaScript</b>, <b>Tailwind CSS</b>, <b>Chakra UI</b>, <b>HTML5</b>, and <b>CSS3</b>. I’ve created original, user-first projects such as e-commerce platforms, smart recipe finders, and food delivery clones — each designed to solve real-world problems.<br /><br />

            I am deeply committed to crafting intuitive, scalable, and accessible digital experiences. I enjoy turning ideas into real products that users love. I'm currently expanding into <b>Next.js</b>, <b>TypeScript</b>, <b>Vue.js</b>, and <b>Python</b> to grow as a full-stack developer.<br /><br />

            I’m always open to exciting collaborations or job opportunities worldwide. Feel free to connect with me — all links are in the footer!<br /><br />

            <i>Beyond coding</i>, I enjoy <b>listening to music</b>, <b>writing drama scripts</b>, and indulging in creative storytelling — which helps me think outside the box and bring personality to my projects.
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
        <Skills skill='TailwindCSS'/>
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='ChakraUI' />
        <Skills skill='Postman' />
        <Skills skill='Figma' />
        <Skills skill='Vercel' />
        <Skills skill='Npm' />
        <Skills skill='Bootstrap'/>
        <Skills skill='AntDesign'/>
        <Skills skill='VSCode'/>
      </div>
    </>
  )
}

export default About