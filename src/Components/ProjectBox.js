import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    MyBoutiqueDesc : "This is a My Boutique E-Commerce Website . It is a responsive website which was made to understand Redux, react, Libraries and frameworks. I also learned how to host my project on Github and then how to deploy that project using Github pages.",
    MyBoutiqueGithub : "https://github.com/GSMunde/E-Commerce-Website",
    MyBoutiqueWebsite : "https://my-boutiquee.vercel.app/",

    AmazonCloneDesc : "The Amazon Frontend Clone Project is a web development that attempts to replicate the user interface and design of Amazon's popular e-commerce platform using a combination of HTML, CSS and JavaScript. The goal is to master front-end skills by cloning websites as closely as possible.",
    AmazonCloneGithub : "https://github.com/GSMunde/Amazon-Clone",
    AmazonCloneWebsite : "https://my-amaazon-clone.vercel.app/",

    SwiggyCloneDesc : "The Swiggy Frontend Clone Project is a web development initiative aimed at replicating the user interface and design of Swiggy’s popular food delivery platform using HTML, CSS, JavaScript, React.js and Tailwind CSS. This project focuses on honing frontend development skills by closely mirroring the layout, design, and functionality of the original website.",
    SwiggyCloneGithub : "https://github.com/GSMunde/Swiggy",
    SwiggyCloneWebsite : "https://swiggy-clone-gray.vercel.app/",

    TaylorMealsDesc : "A web application designed for Taylor, a busy professional, to simplify finding recipes based on available ingredients, time constraints, or preferences. Key features include: Ingredient-based recipe search using TheMealDB API. Interactive map showing the recipe's origin.",
    TaylorMealsGithub : "https://github.com/GSMunde/Taylor_Meals",
    TaylorMealsWebsite : "https://taylor-meals.vercel.app/",
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank' rel="noreferrer">
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank' rel="noreferrer">
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox