import React from 'react';
import './About.css';
import {BiUser} from 'react-icons/bi';
import animationData1 from "../../lotties/dev1.json";
import { Player } from '@lottiefiles/react-lottie-player';
const About = () => {
    return (
        <section id='about'>
            <h5>Get to know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                    <Player
                  className="name"
                  autoplay
                  loop
                  src={animationData1}
                  alt="image"
                  style={{ height: "20rem",   backgroundColor: "rgb(199 41 187 / 94%)" }}
                ></Player>
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className='about-yellow'>
                            <BiUser className='about__icon' />
                            <h5>Full Stack Developer </h5>
                            <small>Yellow Summer,Your Dream,Our Promise </small>
                        </article>
                    </div>
                    <p>
                        I completed my Bachelor of Mechanical Engineering. Due to certain
                        reasons, I planned to switch my career to the IT industry. So, I
                        decided to level up my skills and shortly after that, I enrolled
                        myself in a full-stack development course. I started to learn
                        full-stack with joy. I have a strong passion for both front-end and
                        back-end development. I love to learn and I am always looking to
                        learn and experiment with new technologies! This is how a Mechanical Engineer turned into a full-stack developer.
                    </p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    );
}

export default About;