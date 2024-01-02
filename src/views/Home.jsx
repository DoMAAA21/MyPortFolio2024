import React from "react";
import "./css/home.css";
import { Link } from "react-scroll";
import Me from "../assets/me.jpg";


const Home = () => (
    <div className="hero" id="home">
        <div className="hero-overlay">
            <div className="description">
                <h2 className="title">HELL0! i aM JHaRolD caTaLuña</h2>

                <h3 className="tagline">
                    I do FullStack Web/Mobile Development...
                </h3>


                <p className="paragraph">
                    As a seasoned full-stack developer with expertise in both web and mobile development,
                    I specialize in building scalable and user-friendly websites. My passion lies in 
                    transforming digital concepts into tangible experiences, wielding a keyboard as my tool and 
                    lines of code as my medium. Let's collaborate and turn your digital aspirations into reality. Reach out, and let's embark on this exciting journey together!
                </p>

            </div>
            <img src={Me} alt="Fiz" className="hero-image" />
        </div>
        <div className="social-icons">
            <a href="https://github.com/DoMAAA21" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github" />
            </a>
            <a
                href="https://www.linkedin.com/in/jharold-cataluna/"
                target="_blank"
                rel="noreferrer"
            >
                <i className="fa-brands fa-linkedin-in" />
            </a>

            <a
                href="https://twitter.com/__TheRealJ"
                target="_blank"
                rel="noreferrer"
            >
                <i className="fa-brands fa-twitter" />
            </a>
            <a
                href="https://www.instagram.com/jharoldgc"
                target="_blank"
                rel="noreferrer"
            >
                <i className="fa-brands fa-instagram" />
            </a>
        </div>
    </div>
);

export default Home;
