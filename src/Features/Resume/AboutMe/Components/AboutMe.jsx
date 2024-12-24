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
                        Why is this at the end, you may ask? Because I believe my projects speak
                        for themselves, showcasing my skills and passion as an engineer. I'm a Full
                        Stack Developer with expertise in building impactful solutions.
                    </p>
                    <p>
                        My focus lies in solving real-world problems through clean, scalable, and
                        user-friendly web applications.
                    </p>
                    <p>
                        My interest in computers reached its zenith when I was twelve years old. I commenced learning to
                        code when I was sixteen, and my first programming language was Python.
                        Although I did learn Python, life’s ups and downs compelled me to abandon it due to academic
                        reasons, as is the case in India. However, my passion for programming endured, and I am
                        currently engaged in creating websites for both recreational and professional purposes.
                    </p>
                    <a
                        href="/Gyanaa_Vaibhav_Resume.pdf"
                        download="Gyanaa_Vaibhav_Resume.pdf"
                        style={{textDecoration: 'none'}}
                    >
                        <button className='view-resume'>View Resume</button>
                    </a>
                </div>
            </div>
        </>
)
}