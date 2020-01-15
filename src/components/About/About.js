import React from 'react';
import runningImg from '../../images/running.jpg';
import bikingImg from '../../images/biking.jpg';

export const About = () => {

  return (
    <section className="About-container">
      <h2>About SecondActFitness</h2>
      <div className="About_img-container">
        <img src={runningImg} alt="About running profile"/>
        <img src={bikingImg} alt="About biking profile" />
      </div>
    </section>
  )
}