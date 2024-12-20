import React from "react";
import './Card.css'
import Arrow from '/svg/Arrow.svg'

export default function Card({image,imageAlt,heading,body,list,link,technologies}){

    const tech = technologies.map(t => <p key={t} className='project-technologies'>{t}</p>)
    const points = list.map(i => <li key={i}> {i} </li> )

    return (
        <div className='project-card'>

            <img className='project-image' src={image} alt={imageAlt}/>

            <div className='project-card-container'>

                <h3 className='project-card-heading'>{heading}</h3>

                {link &&
                    <a className='project-card-link' href={link} target='_blank'>Check Out Live here
                        <img src={Arrow} alt="Slant Arrow"/>
                    </a>
                }

                <div className='project-card-body'>
                    <p>{body}</p>
                    <ul>{points}</ul>
                </div>

                <div className='project-card-technologies'>
                    {tech}
                </div>

            </div>
        </div>
    )
}