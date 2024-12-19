import React from "react";
import './Projects.css'
import Card from "../Card/Card.jsx";


export default function Projects({title , cardDetails}){

    return(
        <>
            <h2 className='projects'>{title}</h2>
            <div className='project-section'>
                <Card
                    image={'l'}
                    heading={'Project Heading'}
                    link={'test'}
                    list={['Learned this a','Learned this b','Learned this c','Learned this d']}
                    body={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut necessitatibus nesciunt quasi quisquam ratione. Adipisci animi commodi excepturi laudantium, maxime nisi, nulla, officia perferendis possimus quisquam similique velit voluptatibus?'}
                    technologies={['React','Redis','Node','Express']}
                />

                <Card
                    image={'l'}
                    heading={'Project Heading'}
                    link={'test'}
                    list={['Learned this a','Learned this b','Learned this c','Learned this d']}
                    body={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut necessitatibus nesciunt quasi quisquam ratione. Adipisci animi commodi excepturi laudantium, maxime nisi, nulla, officia perferendis possimus quisquam similique velit voluptatibus?'}
                    technologies={['React','Redis','Node','Express']}
                />
                <Card
                    image={'l'}
                    heading={'Project Heading'}
                    link={'test'}
                    list={['Learned this a','Learned this b','Learned this c','Learned this d']}
                    body={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut necessitatibus nesciunt quasi quisquam ratione. Adipisci animi commodi excepturi laudantium, maxime nisi, nulla, officia perferendis possimus quisquam similique velit voluptatibus?'}
                    technologies={['React','Redis','Node','Express']}
                />
                <Card
                    image={'l'}
                    heading={'Project Heading'}
                    link={'test'}
                    list={['Learned this a','Learned this b','Learned this c','Learned this d']}
                    body={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut necessitatibus nesciunt quasi quisquam ratione. Adipisci animi commodi excepturi laudantium, maxime nisi, nulla, officia perferendis possimus quisquam similique velit voluptatibus?'}
                    technologies={['React','Redis','Node','Express']}
                />
            </div>
        </>
    )
}