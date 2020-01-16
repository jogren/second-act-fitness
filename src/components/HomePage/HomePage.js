import React from 'react';
import runningImg from '../../images/running.jpg';
import ScrollAnimation from 'react-animate-on-scroll';


export const HomePage = () => {

  return(
    <section className="HomePage-container">
      <h2>About Us</h2>
      <div className="HomePage_content-container">
        <ScrollAnimation animateIn="slideInLeft">
          <img src={runningImg} alt="HomePage running profile" />
        </ScrollAnimation>
        <ScrollAnimation animateIn="slideInRight">
          <div className="HomePage-content">
            <p>At Second Act Fitness, we believe that if there is in fact a real fountain of youth, it is unquestionably physical fitness! We also believe fitness is FUN…or at least it should be.</p>
            <p>We provide In-Home Fitness Training to help you set and reach your personal fitness goals. We bring the fun back to fitness that can help you:</p>
            <ul>
              <li>Stay active and healthy over the long haul.</li>
              <li>Improve strength, balance and stability.</li>
              <li>Preserve the confidence that comes from maintaining independence.</li>
            </ul>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}