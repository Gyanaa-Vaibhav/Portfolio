import {useState} from 'react'
import './App.css'
import Home from "./Features/Resume/Home/Components/Home.jsx";
import Projects from "./Features/Resume/Projects/Components/Projects.jsx";
import AboutMe from "./Features/Resume/AboutMe/Components/AboutMe.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Home/>
            <Projects title={'Projects'}/>
            <Projects title={'Upcoming Projects'}/>
            <AboutMe />
        </>
    )
}

export default App
