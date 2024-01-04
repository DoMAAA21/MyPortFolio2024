import React, { useRef } from 'react'
import './css/contact.css'

const Contact = () => {

    return (
        <div className="contact" id="contact">
            <div className="footer-left">
                <h1>
                    How To Contact Me?
                </h1>
                <button className="hire-me" style={{ marginLeft: "20%" }}>
                    <a href="mailto:business.jharoldcataluna@gmail.com">Contact Me</a>
                </button>

                <p className="footer-text" style={{ marginTop: "150px" }} />
            </div>
            <div className="footer-right">
                <h3>I'M ALWAYS INTERESTED ABOUT</h3>
                <div className="interests">
                    <p>Web Development</p>
                    <p>Frontend Development</p>
                    <p>Backend Development</p>
                    <p>Mobile Development</p>
                    <p>Software Development</p>
                    <p>React</p>
                    <p>Laravel</p>
                    <p>JavaScript</p>
                    <p>React Native</p>
                    <p>TypeScript</p>
                </div>

                <hr />
                <p>
                    <h3 >
                        Email: business.jharoldcataluna@gmail.com
                    </h3>
                </p>
                <hr></hr>
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

                <hr />
            </div>
        </div>
    )
}

export default Contact
