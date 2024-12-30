import React from "react";
import './AboutMe.css'

export default function AboutMe(){
    return(
        <>
            <div className='about-section' style={{position:"relative"}}>
            <div className='proj' id="aboutMe"></div>
                <h2 className='about'>About Me</h2>
                <div className='about-desc'>
                    <p>
                        My focus lies in solving real-world problems through clean, scalable, and
                        user-friendly web applications.
                    </p>
                    <p>
                        I am a Motivated Full Stack Developer with expertise in React, Node.js, Express.js, and PostgreSQL.
                        Adept at creating user-centric, scalable applications. Passionate about solving real-world
                        problems with clean, elegant code.
                    </p>
                    {/*<p>*/}
                    {/*    My interest in computers reached its zenith when I was twelve years old. I commenced learning to*/}
                    {/*    code when I was sixteen, and my first programming language was Python.*/}
                    {/*    Although I did learn Python, life’s ups and downs compelled me to abandon it due to academic*/}
                    {/*    reasons, as is the case in India. However, my passion for programming endured, and I am*/}
                    {/*    currently engaged in creating websites for both recreational and professional purposes.*/}
                    {/*</p>*/}
                    <a
                        href="/Gyanaa_Vaibhav_Resume.pdf"
                        download="Gyanaa_Vaibhav_Resume.pdf"
                        style={{textDecoration: 'none'}}
                    >
                    </a>
                    <h4 style={{textAlign:'left'}} className='skills'>Skills</h4>
                    <div className='skill-l'>
                    <ul>
                        <li><strong>Frontend</strong>: React.js, Redux, JavaScript (ES6+), HTML5, CSS3, Material Ul</li>
                        <li><strong>Backend</strong>: Node.js, Express.js, REST APls, WebSocket's</li>
                        <li><strong>Database</strong>: PostgresSQL, MongoDB, Redis</li>
                        <li><strong>Testing</strong>: Jest, Vitest</li>
                        <li><strong>Others</strong>: Linux, Git, GraphQL, Firebase</li>
                    </ul>
                    </div>
                </div>
            </div>
        </>
)
}