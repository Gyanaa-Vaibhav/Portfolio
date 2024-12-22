import React, {useRef, useState} from 'react'
import './App.css'
import Home from "./Features/Resume/Home/Components/Home.jsx";
import Projects from "./Features/Resume/Projects/Components/Projects.jsx";
import AboutMe from "./Features/Resume/AboutMe/Components/AboutMe.jsx";
import NavBar from "./Features/Resume/NavBar/Components/NavBar.jsx";
import ContactMe from "./Features/Resume/ContactMe/Components/ContactMe.jsx";
import movie1 from '/images/movie_watchlist_1.png?url'
import movie2 from '/images/movie_watchlist_2.png?url'
import movie3 from '/images/movie_watchlist_3.png?url'
import movie4 from '/images/movie_watchlist_4.png?url'
import movie5 from '/images/movie_watchlist_5.png?url'
import pokemon1 from '/images/pokemon_game_1.png?url'
import pokemon2 from '/images/pokemon_game_2.png?url'
import pokemon3 from '/images/pokemon_game_3.png?url'
import pokemon4 from '/images/pokemon_game_4.png?url'
import pokemon5 from '/images/pokemon_game_5.png?url'
import message1 from '/images/message_inc_1.png?url'
import message2 from '/images/message_inc_2.png?url'
import message3 from '/images/message_inc_3.png?url'
import message4 from '/images/message_inc_4.png?url'
import cv1 from '/images/cvmaker_1.png?url'
import cv2 from '/images/cvmaker_2.png?url'

function App() {
    const [count, setCount] = useState(0)

    const movieImgArr = [movie1,movie2,movie3,movie4,movie5];
    const pokemonImgArr = [pokemon1,pokemon2,pokemon3,pokemon4,pokemon5];
    const messageImgArr = [message1,message2,message3,message4];
    const cvImgArr = [cv1,cv2];

    return (
        <>
            <NavBar/>
            <Home/>
            <Projects id={'projects'} title={'Projects'} cardDetails={
                    [
                        {
                            image: {image:messageImgArr},
                            heading: 'Message App',
                            link: 'https://gyanaavaibhav.in',
                            list: [
                                'Implemented room-based chat functionality with Redis for caching and PostgreSQL for persistence.',
                                'Integrated WebSocket for real-time communication with typing indicators and user tracking.',
                                'Ensured scalability with Redis expiry for short-term caching and optimized SQL queries for efficient data storage',
                                'Developed a modular backend architecture following the MVC pattern',
                                'Designed a responsive and interactive UI for seamless user experience.'
                            ],
                            body: `A real-time chat application built with advanced technologies like Redis and WebSockets. Designed for instant 
                            communication, the app features a clean UI, anonymous chat functionality, and robust room-based messaging. 
                            Messages are cached in Redis for quick retrieval and stored in PostgreSQL for persistence.`,
                            technologies: ['React', 'Node.js', 'Express.js', 'Redis', 'WebSocket', 'PostgresSQL', 'Socket.IO'],
                        },
                        {
                            image: {image:pokemonImgArr},
                            heading: 'Pokémon Memory Game',
                            link: 'https://pokemon.gyanaavaibhav.in',
                            // TODO GRAPHQL and BACKEND
                            list: [
                                'Integrated PokéAPI to fetch Pokémon data dynamically for gameplay.',
                                'Designed levels with progressively increasing difficulty using dynamic card generation logic.',
                                'Added sound effects and animations to enhance user interaction.',
                                'Utilized Redux for state management, ensuring scalable and maintainable code'
                            ],
                            body: `A fun and interactive memory game utilizing the PokéAPI for dynamic data. 
                        The game challenges players to memorize and match Pokémon cards, with increasing 
                        difficulty levels and customizable sound effects. Fully optimized for responsiveness and user engagement`,
                            technologies: ['React', 'JavaScript', 'CSS', 'PokéAPI', 'ContextAPI', 'GraphQL']
                        },
                        {
                            image: {image:movieImgArr},
                            heading: 'Movie Watch List',
                            link: 'https://movie.gyanaavaibhav.in',
                            // TODO Autosugestion,backend and MongoBD
                            list: [
                                'Built a backend API with Node.js and Express for efficient data handling.',
                                'Designed an engaging and accessible UI with advanced responsiveness.',
                                'Ensured data consistency and security with MongoDB and token-based authentication.',
                                'Implemented an intelligent auto-suggestion feature for movie searches.'
                            ],
                            body: `A React-based movie tracker app with auto-suggestion functionality and an intuitive UI. 
                            Allows users to manage their watchlist, search for movies with real-time suggestions, 
                            and explore payment integration for premium features.`,
                            technologies: ['React', 'Node.Js', 'Express.Js', 'REST']
                        },
                        {
                            image: {image:cvImgArr},
                            heading: 'CV Maker',
                            link: 'https://cvmaker.gyanaavaibhav.in',
                            // TODO HTML to PDF
                            list: [
                                'Built a feature to export resumes as downloadable PDFs with HTML2PDF.',
                                'Followed SOLID principles to ensure maintainability and scalability.',
                                'Developed a backend for handling user data with REST API endpoints.',
                                'Designed a clean and professional UI with responsive design principles.',
                            ],
                            body: `A customizable CV builder allowing users to input details and export 
                            professional resumes in multiple formats. Designed with React and a Node.js backend, 
                            focusing on simplicity and user experience.`,
                            technologies: ['React', 'Node.js', 'Express.js', 'HTML2PDF', 'CSS Modules']
                        }
                    ]}/>
                <Projects id={'upcomingProjects'} title={'Upcoming Projects'} cardDetails={
                    [
                        {
                            image: 'l',
                            heading: 'Tacker A Stock Portfolio',
                            link: '',
                            list: [
                                'Develop an interactive dashboard for stock performance tracking using Chart.js.',
                                'Integrate real-time market data for accurate portfolio updates.',
                                'Implement secure user authentication and data encryption.',
                                'Provide exportable reports in PDF or CSV formats for user convenience.',
                            ],
                            body: `A stock portfolio management application to track investments, 
                            analyze performance, and provide financial insights. Designed for scalability and ease of use,
                            it aims to simplify portfolio management for users.`,
                            technologies: ['React', 'Node.js', 'Express.js', 'Chart.js', 'ContextAPI', 'MongoDB'],
                        },
                        {
                            image: 'l',
                            heading: 'TodoItAll App',
                            link: '',
                            list: [
                                'Build a collaborative note-sharing system with real-time updates using Firebase.',
                                'Develop budgeting features with expense tracking and financial summaries.',
                                'Incorporate advanced permissions for shared tasks and notes.',
                                'Ensure smooth navigation and accessibility with Material UI components.',
                            ],
                            body: `A comprehensive productivity app to manage todos, 
                            notes, and finances in one place. Features include collaborative notes, 
                            shared task management, and budgeting tools.`,
                            technologies: ['React', 'Node.js', 'Express.js', 'Material UI', 'PostgresSQL', 'MongoDB', 'Socket.IO', 'Redis'],
                        }
                    ]
                }/>
                <AboutMe/>
                <ContactMe/>
            </>
            )
            }

            export default App
