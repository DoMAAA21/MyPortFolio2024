import React from 'react'
import './css/about.css'
//FrontEnd
import ReduxIcon from '../assets/redux.png';
import HtmlLogo from '../assets/html.png';
import jQuery from '../assets/jquery.png';
import CSSLogo from '../assets/css.png';
import BootStrap from '../assets/bootstrap.png';
import Tailwind from '../assets/tailwind.png';
import Typescript from '../assets/typescript.png';
import JavaScript from '../assets/javascript.png';
import ReactIcon from '../assets/react.png';
import Mui from '../assets/mui.png';
import ViteLogo from '../assets/vite.svg';

//Backend
import NodeJs from '../assets/nodejs.png';
import ExpressJs from '../assets/expressjs.png';
import Phplogo from '../assets/phplogo.png';
import Laravel from '../assets/laravel.webp';
import CodeIgniter from '../assets/codeigniter.png';
import MySQL from '../assets/mysql.png';
import MongoDb from '../assets/mongodb.png';
import Python from '../assets/python.png';

//Mobile
import ReactNativeLogo from '../assets/reactnative.png';
import ExpoLogo from '../assets/expo.png';
import Galio from '../assets/galio.png';
// import Ruby from '../assets/ruby.png'
// import Flutter from '../assets/flutter.png'

// import Figma from '../assets/figma.png'

//Versioning
import NPMlogo from '../assets/npm.png'
import GitLogo from '../assets/git.png';
import GitHublogo from '../assets/github.png';
import VercelLogo from '../assets/vercel.png';
import Bitbucket from '../assets/bitbucket.png';
import CPanel from '../assets/cpanel.png';



//Tools
import VSCode from '../assets/vscode.png';

// import Canva from '../assets/canva.png'

// import PostMan from '../assets/postman.png'
// import MySql from '../assets/mysqll.png'
// import Django from '../assets/djangoo.png'
// import Firebase from '../assets/firebase.png'
// import xD from '../assets/xdd.png'
// import SpringBoot from '../assets/springboot.png'
// import XMind from '../assets/XMins.ico'
// import SQLyog from '../assets/SQLyog.ico'
// import PostgreSQL from '../assets/postgres.png'
// import Android from '../assets/androidstudio.png'


// import Drawio from '../assets/drawio.png'
// import matlab from '../assets/matlab.png'

// import Netlify from '../assets/netlify.svg'
// import Heroku from '../assets/heroku_icon_130912.png'
// import Intellij from '../assets/IntelliJ_IDEA_Icon.svg.png'
// import Kotlin from '../assets/Kotlin_Icon.svg.png'








const About = () => (
    <section className="about" id="about">
        <div className="about-me">
            <h2 className="title about-title">aBOUT mE</h2>
            <p className="paragraph about-para">
                Highly motivated and skilled Web Developer seeking a challenging environment
                where I can contribute to the success of a dynamic firm by leveraging my technical
                experience and problem-solving ability. Committed to offering new solutions,
                optimizing system efficiency, and developing projects in accordance with best
                standards in the industry. Seeking opportunities to further my knowledge and
                abilities in a collaborative and growth-oriented atmosphere.
            </p>
            <button className="hire-me">
                <a
                    href="https://drive.google.com/file/d/1jUhLyp8Ww0NMzZK4gPTCoL_KMuQfd8eC/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                >
                    GET MY CV
                </a>
            </button>
        </div>
        <div className="about-skills">
            <h2 className="skill-title">Front-End</h2>
            <div className="skills">
                <div className="skill">
                    <img src={ReactIcon} alt="" />
                    <p>React</p>
                </div>
                <div className="skill">
                    <img src={JavaScript} alt="" />
                    <p>JavaScript</p>
                </div>
                <div className="skill">
                    <img src={Typescript} alt="" />
                    <p>TypeScript</p>
                </div>
                <div className="skill">
                    <img src={ReduxIcon} alt="" />
                    <p>Redux</p>
                </div>
                <div className="skill">
                    <img src={ViteLogo} alt="" />
                    <p>Vite</p>
                </div>
                <div className="skill">
                    <img src={HtmlLogo} alt="" />
                    <p>HTML5</p>
                </div>
                <div className="skill">
                    <img src={CSSLogo} alt="" />
                    <p>CSS3</p>
                </div>
                <div className="skill">
                    <img src={jQuery} alt="" />
                    <p>jQuery</p>
                </div>

                <div className="skill">
                    <img src={BootStrap} alt="" />
                    <p>Bootstrap</p>
                </div>
                <div className="skill">
                    <img src={Mui} alt="" />
                    <p>MUI</p>
                </div>
                <div className="skill">
                    <img src={Tailwind} alt="" />
                    <p>Tailwind</p>
                </div>
            </div>
            <h2 className="skill-title">Back-End</h2>
            <div className="skills">
                <div className="skill">
                    <img src={NodeJs} alt="" />
                    <p>NodeJs</p>
                </div>
                <div className="skill">
                    <img src={Typescript} alt="" />
                    <p>TypeScript</p>
                </div>
                <div className="skill">
                    <img src={ExpressJs} alt="" />
                    <p>ExpressJS</p>
                </div>
                <div className="skill">
                    <img src={Phplogo} alt="" />
                    <p>PHP</p>
                </div>
                <div className="skill">
                    <img src={Laravel} alt="" />
                    <p>Laravel</p>
                </div>
                <div className="skill">
                    <img src={CodeIgniter} alt="" />
                    <p>Codeigniter</p>
                </div>
                <div className="skill">
                    <img src={MySQL} alt="" />
                    <p>MySQL</p>
                </div>
                <div className="skill">
                    <img src={MongoDb} alt="" />
                    <p>MongoDB</p>
                </div>
                <div className="skill">
                    <img src={Python} alt="" />
                    <p>Python</p>
                </div>
            </div>
            <h2 className="skill-title">Mobile</h2>
            <div className="skills">
                <div className="skill">
                    <img src={ReactNativeLogo} alt="" />
                    <p>React Native</p>
                </div>
                <div className="skill">
                    <img src={ExpoLogo} alt="" />
                    <p>Expo</p>
                </div>
                <div className="skill">
                    <img src={Galio} alt="" />
                    <p>Galio Framework</p>
                </div>
            </div>
            <h2 className="skill-title">Version Control & Deployment Tools</h2>
            <div className="skills">
                <div className="skill">
                    <img src={GitLogo} alt="" />
                    <p>Git</p>
                </div>
                <div className="skill">
                    <img src={GitHublogo} alt="" />
                    <p>GitHub</p>
                </div>
                <div className="skill">
                    <img src={Bitbucket} alt="" />
                    <p>Bitbucket</p>
                </div>
                <div className="skill">
                    <img src={VercelLogo} alt="" />
                    <p>Vercel</p>
                </div>
                <div className="skill">
                    <img src={CPanel} alt="" />
                    <p>CPanel</p>
                </div>
            </div>
            <h2 className="skill-title">Tools</h2>
            <div className="skills">
                <div className="skill">
                    <img src={VSCode} alt="" />
                    <p>VS Code</p>
                </div>
                {/* <div className="skill">
                    <img src={matlab} alt="" />
                    <p>Matlab</p>
                </div>

                <div className="skill">
                    <img src={PostMan} alt="" />
                    <p>Postman</p>
                </div>
                <div className="skill">
                    <img src={Android} alt="" />
                    <p>Android Studio</p>
                </div> */}
                <div className="skill">
                    <img src={NPMlogo} alt="" />
                    <p>npm</p>
                </div>

            </div>
            {/*  <h2 className="skill-title">Design</h2>
            <div className="skills">
                <div className="skill">
                    <img src={Canva} alt="" />
                    <p>Canva</p>
                </div>
                <div className="skill">
                    <img src={Figma} alt="" />
                    <p>Figma</p>
                </div>
                <div className="skill">
                    <img src={xD} alt="" />
                    <p>Adobe XD</p>
                </div>
                <div className="skill">
                    <img src={XMind} alt="" />
                    <p>XMind </p>
                </div>
                <div className="skill">
                    <img src={Drawio} alt="" />
                    <p>draw.io</p>
                </div>
            </div> */}
            <h2 className="skill-title">Soft Skills</h2>
            <div className="skills">
                <p className="soft-skill">Analytical Thinker</p>
                <p className="soft-skill">Effective Communicator</p>
                <p className="soft-skill">Collaborative Team Player</p>
                <p className="soft-skill">Quick Learner</p>
                <p className="soft-skill">Innovative Thinking</p>
                <p className="soft-skill">Adaptable and Flexible</p>
                <p className="soft-skill">Leadership</p>
                <p className="soft-skill">Problem-solving Abilities</p>
                <p className="soft-skill">Effective Time Management</p>
                <p className="soft-skill">Adaptable and Flexible</p>
            </div>
        </div>
    </section>
)

export default About
