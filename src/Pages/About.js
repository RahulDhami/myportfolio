import React from 'react';
import Skills from '../Components/Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';
import Layout from '../Components/AppLayout/Layout.js';

const About = () => {
  return (
    <Layout>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>

            Hello, I'm <b>Rahul Singh Dhami</b> from Uttarakhand, India.
            Currently Iam in 2nd year of my college.
            Iam pursuing <b>B.Tech[CSE]</b> from <b> Graphic Era Hill University,Bhimtal Campus.</b> 
            I have good coding skills. I love to solve complex problems and my aim is to become a good <b>Software Developer.</b>           
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
        <Skills skill='Cpp' />
        <Skills skill='Javascript' />
        <Skills skill='Npm' />
        
      </div>
    </Layout>
  )
}

export default About