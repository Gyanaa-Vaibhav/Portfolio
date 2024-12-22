import React from "react";
import './Projects.css'
import Card from "../Card/Card.jsx";


export default function Projects({id,title , cardDetails}){

    const card = cardDetails.map(d=> <Card
        key={d.heading}
        image={d.image}
        heading={d.heading}
        link={d.link}
        list={d.list}
        body={d.body}
        technologies={d.technologies}
    />)

    // TODO ADD Links and Images
    return(
        <>
        <div style={{position:'relative'}} >
            <div className='proj' id={id} ></div>
            <h2 className='projects'>{title}</h2>
            <div id={id} className='project-section'>
                {card}
            </div>
        </div>
        </>
    )
}