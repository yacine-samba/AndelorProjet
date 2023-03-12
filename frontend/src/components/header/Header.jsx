import { useState } from "react";
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEquals, faXmark } from '@fortawesome/free-solid-svg-icons'

export const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const openNav = () => setIsOpen(true);
    const closeNav = () => setIsOpen(false);

    return (
        <div className="Navbar border-b text-center inset-x-0 top-0">
            <div id="mySidenav" className={`sidenav flex flex-col items-center m8 pt-6 p-4 h-screen ${isOpen ? "active" : ""}`}>
                <button className="absolute top-0" id='closeNav' onClick={closeNav}>
                    <FontAwesomeIcon className="iconHeader " icon={faXmark} />
                </button>
                <ul>
                    <li><a href="/">Accueil</a></li>
                    <li><a href="/exposition/1">Visite</a></li>
                    <li><a href="/tickets">FAQ ?</a></li>
                    <li><a href="/">À propos</a></li>
                </ul>
            </div>
            <button id='openNav' onClick={openNav} className="m-auto">
            <FontAwesomeIcon className="iconHeader" icon={faEquals} />
            </button>
        </div>
    );
};
