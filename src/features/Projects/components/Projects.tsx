import '../styles/Projects.css';
import Card from '../Card/components/Card';

type cardDetails = {
    image: {
        image: string[],
        imageAlt: string,
    },
    heading: string,
    link: string,
    list: string[],
    body: string,
    technologies: string[],
}

type Props = {
    id: string,
    title: string,
    cardDetails: cardDetails[]
}
const Projects = ({ id, title, cardDetails }:Props) => { 
    const cards = cardDetails.map(card => (
        <Card
            key={card.heading}
            image={card.image}
            imageAlt={card.image.imageAlt}
            heading={card.heading}
            link={card.link}
            list={card.list}
            body={card.body}
            technologies={card.technologies}
        />
    )
    )

    return (
        <>
            <div id='projects-div'>
                <div className='proj' id={id} ></div>
                <h2 className='projects'>{title}</h2>
                <div id={id} className='project-section'>
                    {cards}
                </div>
            </div>
        </>
    )
}

export default Projects;
