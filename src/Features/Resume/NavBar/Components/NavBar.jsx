import React, { useState, useEffect } from "react";
import "./NavBar.css";

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    function handleScroll(){
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    const scrollTo = (id) => {
        const section = document.getElementById(id);
        section.scrollIntoView({
            behavior: "smooth",
        });
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
            <ul className="nav-items">
                <li className="nav-item" onClick={() => scrollTo("home")}>Home</li>
                <li className="nav-item"  onClick={() => scrollTo('projects')} >Projects</li>
                <li className="nav-item"  onClick={() => scrollTo('upcomingProjects')} >Upcoming Projects</li>
                <li className="nav-item"  onClick={() => scrollTo('aboutMe')}>About</li>
                <li className="nav-item" onClick={() => scrollTo('contactMe')} >Contact</li>
            </ul>
        </nav>
    );
};

export default NavBar;
