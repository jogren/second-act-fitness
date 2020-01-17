import React from 'react';
import runningImg from '../../images/running.jpg';
import bikingImg from '../../images/biking.jpg';
import ScrollAnimation from 'react-animate-on-scroll';

export const About = () => {

  return (
    <section className="About-container">
      <div className="About-content-container">
        <article className="article-top">
          <ScrollAnimation animateIn="slideInLeft">
            <img src={runningImg} alt="About running profile"/>
          </ScrollAnimation>
          <ScrollAnimation animateIn="slideInRight">
            <div>
              <h3>Some fun facts about Paul:</h3>
              <p>I was born in Cincinnati, Ohio in 1957, went to Purdue University and played defensive end for their football team. I got married to Beth in 1981 and we lived in Chicago for three years before moving to Minneapolis. We bought a house in which we still live in today! Raised 3 boys with all the comings and goings - soccer, wrestling, baseball, and lacrosse. I coached them all in soccer and baseball until they got better than me. I am a Civil Engineer with the City of Minneapolis Public Works Department. I am a snowboarder and a member of the National Ski Patrol for the past 35 years, currently an adjunct professor at Hennepin Technical College & I became a Certified Personal Trainer recently, specializing in working with senior folks in the home environment. I have currently become a brewer of beer - with varying degrees of success!!!</p>
            </div>
          </ScrollAnimation>
        </article>
        <article className="article-bottom">
          <ScrollAnimation animateIn="slideInLeft">
            <div>
              <h3>What motivates you to stay active?</h3>
              <p>It's a good release of stress and tension. Plus with my Personal Training business - I need to stay in shape. I am a year round biker, have run 5 marathons in the past, 2 Tough Mudder's, and am currently experimenting with Triathlons (have 3 under my belt) - so I want to be able to do the things that I want to do.</p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="slideInRight">
            <img src={bikingImg} alt="About biking profile" />
          </ScrollAnimation>
        </article>
      </div>
    </section>
  )
}