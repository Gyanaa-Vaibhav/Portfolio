import React from "react";
import './Home.css'
import downArrow from '/svg/downArrow.svg'

export default function Home(){

    return(
        <>
        <div id='home'></div>
            <div className='intro'>
                <p className='hi'>Hi I am,</p>
                <p className='name'>Gyanaa Vaibhav</p>
                <p className='title'>A Full Stack Developer with expertise in UI/UX Design. <br/>
                    I build websites to Solve Problems and Make an Impact to the World.</p>
                <button style={{marginTop:'1.25rem'}} className='view-resume'>View Resume</button>
                <img
                    className='downArrow'
                    src={downArrow}
                    alt="Down Arrow"
                    onClick={() => {
                        window.scrollTo({
                            top: window.innerHeight,
                            behavior: "smooth",
                        });
                    }}
                />
            </div>

        </>
    )
}