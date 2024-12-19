import React from "react";
import './Home.css'
import downArrow from '/svg/downArrow.svg'

export default function Home(){
    return(
        <div className='intro'>
            <p className='hi'>Hi I am,</p>
            <p className='name'>Gyanaa Vaibhav</p>
            <p className='title'>A Full Stack Developer with expertise in UI/UX Design. <br/>
            I build websites to Solve Problems and Make an Impact to the World.</p>
            <img className='downArrow' src={downArrow} alt="Down Arrow"/>
        </div>
    )
}