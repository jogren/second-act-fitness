import React from 'react';
import runningImg from '../../images/running.jpg';
import bikingImg from '../../images/biking.jpg';
import ScrollAnimation from 'react-animate-on-scroll';

export const About = () => {

  return (
    <section className="About-container">
      <h2>About SecondActFitness</h2>
      <div className="About_img-container">
        <ScrollAnimation animateIn="slideInLeft">
          <img src={runningImg} alt="About running profile"/>
        </ScrollAnimation>
        <ScrollAnimation animateIn="slideInRight">
          <img src={bikingImg} alt="About biking profile" />
        </ScrollAnimation>
      </div>
    </section>
  )
}