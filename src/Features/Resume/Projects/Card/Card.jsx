import React, {useEffect} from "react";
import './Card.css'
import Arrow from '/svg/Arrow.svg'

export default function Card({image,imageAlt,heading,body,list,link,technologies}){

    const scrollContainer = React.useRef(null);
    const [showImage, setShowImage] = React.useState(false);
    const [imageUrl, setImageUrl] = React.useState('');
    const [scrollDirection, setScrollDirection] = React.useState(310);
    const [imageAvailable, setImageAvailable] = React.useState(false);

    const tech = technologies.map(t => <p key={t} className='project-technologies'>{t}</p>)
    const points = list.map(i => <li key={i}> {i} </li> )

    React.useEffect(() => {
        if(window.innerWidth <= 768){
            setScrollDirection(260)
        }else if(window.innerWidth > 769){
            setScrollDirection(310)
        }
    },[window.innerWidth])

    const scroll = (direction) => {
        const { current } = scrollContainer;
        if (direction === "left") {
            current.scrollBy({ left: -scrollDirection, behavior: "smooth" });
        } else if (direction === "right") {
            current.scrollBy({ left: scrollDirection, behavior: "smooth" });
        }
    };

    useEffect(() => {
        if(img)
        setImageAvailable(true);
    },[])

    const img = image.image?.map((d, i) => {
        return (
            <div key={i}>
                <img onClick={(e)=> {
                    setShowImage(true);
                    setImageUrl(e.target.src);
                }
                } className='project-image' src={d} alt={d}/>
            </div>
        )
    })

    return (
        <>
            {showImage && (
                <div className="image-popup">
                    <div className="popup-overlay" onClick={() => setShowImage(false)}></div>
                    <div className="popup-content">
                        <span className="close-button" onClick={() => setShowImage(false)}>
                            &#10005;
                        </span>
                        <img src={imageUrl} alt="Enlarged View" className="popup-image" />
                    </div>
                </div>
            )}
        <div className='project-card'>

            {imageAvailable &&
            <div className='image-wrapper'>
                <p className='scroll-right' onClick={() => scroll('left')}>&#9664;</p>
                <div ref={scrollContainer} className='image-container'>
                    {img}
                </div>
                <p className='scroll-left' onClick={() => scroll('right')}>&#9654;</p>
            </div>
            }

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
        </>
    )
}