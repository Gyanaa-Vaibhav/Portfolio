import '../styles/Home.css'
import downArrow from "/SVG/downArrow.svg";

const Home = (): JSX.Element => {
    return (
        <>
            <div id='home'></div>
            <div className='intro'>
                <p className='hi'>Hi I am,</p>
                <p className='name'>Gyanaa Vaibhav</p>
                <p className='title'>A Full Stack Developer with expertise in UI/UX Design. <br/>
                    I build websites to Solve Problems and Make an Impact to the World.</p>
                <a
                    href="/Resume.pdf"
                    rel='noopener'
                >
                    <button className="view-resume">
                        View Resume
                    </button>
                </a>
                <img
                    className='downArrow'
                    src={downArrow}
                    alt="Down Arrow"
                    onClick={() => {
                        window.scrollTo({
                            top: window.innerHeight * 0.94,
                            behavior: "smooth",
                        });
                    }}
                />
            </div>
        </>
    )
}


export default Home