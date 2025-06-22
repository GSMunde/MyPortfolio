import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import {CiCoffeeCup} from "react-icons/ci";
import Avatar from "../Images/Avatar.jpg"

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>Geetanjali Munde</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
              I'm <b>Geetanjali Munde</b>, a passionate Frontend Developer who transforms ideas into scalable, user-focused web products. I specialize in building responsive B2C/B2B applications that are not only visually impressive but also optimized for real-world performance.<br /><br />
              
              I have hands-on experience in building production-ready projects using <b>React.js</b>, <b>Redux</b>, <b>JavaScript (ES6+)</b>, <b>Tailwind CSS</b>, <b>Chakra UI</b>, <b>HTML5</b>, and <b>CSS3</b>. I’ve contributed to impactful applications including:
              <ul>
                <li><b>Taylor Meals</b> – a smart recipe finder with real-time data and interactive maps</li>
                <li><b>My Boutique</b> – a fully responsive e-commerce website</li>
                <li><b>Swiggy Clone</b> – a Q-commerce food ordering platform</li>
                <li><b>Amazon Clone</b> – a functional e-commerce UI replica</li>
              </ul>
              Professionally, I’m working as an <b>Associate Software Engineer at Hue Logics</b>, where I build intuitive, scalable, and user-friendly frontend interfaces in a fast-paced, agile environment.<br /><br />
              
              I’m always eager to grow. I'm currently expanding my expertise into <b>Next.js</b>, <b>Vue.js</b>, <b>TypeScript</b>, <b>Python</b>, and backend development — aiming to evolve into a full-stack developer.<br /><br />
              
              I am ready and excited to collaborate with global teams. I bring strong communication skills, an agile mindset, and a relentless drive to learn and build.<br /><br />

              And yes — I do all of this best with a warm cup of <b>tea</b> <CiCoffeeCup style={{scale:"1.5", rotate:"15deg"}} /> beside me.
            </p>

        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home