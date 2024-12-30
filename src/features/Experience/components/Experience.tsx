import "../styles/Experience.css";

const Experience = () => {
    return (
        <>
            <div className="about-section">
                <div className="proj" id="experience"></div>
                <h2 className="experience">Experience</h2>
                <div className="experience-desc">
                    <div className='work-exp'>
                        <p>Freelance Full Stack Developer • Full-Time</p>
                        <p>July 2023 - Present • 1yr 6mos</p>
                        <p>India Remote</p>
                    </ div>
                    <div className='skill-l work-exp'>
                        <ul>
                            <li>Designed and developed < span>5+</span> full-stack web applications, delivering responsive and scalable solutions using React, Node.js, and PostgresSQL.</li >
                            <li> Implemented authentication systems(JWT, role - based authorization) and optimized database queries, reducing API response time by <span>40%</span >.</li >
                            <li>WordPress and Tailwind CSS.</li>
                            <li > Integrated Redis caching to handle high - traffic scenarios, improving application performance by <span > 50%</span>.</li >
                            <li > Collaborated with clients to define requirements and delivered projects < span > 20%</ span > ahead of deadlines, ensuring client satisfaction.</li >
                        </ul>
                    </div >
                    <div className="work-exp">
                        <p>Ayud Jobs • Internship</p>
                        <p>Mar 2023 - Jun 2023 • 4 mos</p>
                        <p>India Remote</p>
                    </div>
                    <div className="skill-l work-exp">
                        <ul>
                            <li>Basic Python and Frameworks, Django.</li>
                            <li>Learned about Full Stack Development.</li>
                            <li>WordPress and Tailwind CSS.</li>
                            <li>Used to Manage Data using SQLite.</li>
                            <li>Worked with a team of 5 people.</li>
                        </ul>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Experience;
