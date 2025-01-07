import './App.css'
import AboutMe from './features/AboutMe/components/AboutMe';
import ContactMe from './features/ContactMe/components/ContactMe';
import Experience from './features/Experience/components/Experience';
import Home from './features/Home/components/Home'
import NavBar from './features/NavBar/components/NavBar';
import Projects from './features/Projects/components/Projects';
import pokemon1 from '/images/pokemon_game_1.png?url'
import pokemon2 from '/images/pokemon_game_2.png?url'
import pokemon3 from '/images/pokemon_game_3.png?url'
import pokemon4 from '/images/pokemon_game_4.png?url'
import pokemon5 from '/images/pokemon_game_5.png?url'
import message1 from '/images/message_inc_1.png?url'
import message2 from '/images/message_inc_2.png?url'
import message3 from '/images/message_inc_3.png?url'
import message4 from '/images/message_inc_4.png?url'
import stock1 from '/images/stock_predictor_1.png?url'
import stock2 from '/images/stock_predictor_2.png?url'
import stock3 from '/images/stock_predictor_3.png?url'

// import movie1 from '/images/movie_watchlist_1.png?url'
// import movie2 from '/images/movie_watchlist_2.png?url'
// import movie3 from '/images/movie_watchlist_3.png?url'
// import movie4 from '/images/movie_watchlist_4.png?url'
// import movie5 from '/images/movie_watchlist_5.png?url'
// import cv1 from '/images/cvmaker_1.png?url'
// import cv2 from '/images/cvmaker_2.png?url'

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <AboutMe />
      <Experience />
      <Projects id={'projects'} title={'Projects'} cardDetails={
        [
          {
            image: { image: [message1, message2, message3, message4], imageAlt:'Message App Image' },
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
            image: { image: [pokemon1, pokemon2, pokemon3, pokemon4, pokemon5], imageAlt:'Pokemon Game Images' },
            heading: 'Pokémon Memory Game',
            link: 'https://pokemon.gyanaavaibhav.in',
            list: [
              'Integrated PokéAPI to fetch Pokémon data dynamically for Game Play.',
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
            image: { image: [stock1, stock2, stock3], imageAlt:'Stock Predicor Images' },
            heading: 'Stock Price Predictor',
            link:'https://stockpredictor.gyanaavaibhav.in/',
            body: `Added the ability to input stock tickers and fetch real-time data from Polygon.io. Integrated OpenAI to generate concise stock performance predictions. Built a user-friendly React interface with interactive controls, animations, and responsive design. Leveraged TypeScript for type safety and maintainable codebase.`,
              list:[
                  'Enhanced API integration skills with external services like OpenAI and Polygon.io.',
                  'Improved backend skills with asynchronous data fetching and error handling.',
                  'Strengthened frontend expertise by creating modular, interactive UI components.'
              ],
              technologies:['TypeScript', 'CSS', 'Node.js', 'Express.js', 'OpenAI API', 'Polygon.io API']
          }
        ]} />
      <ContactMe />
    </>
  );
}

export default App
