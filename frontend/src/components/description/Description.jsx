import React, { useEffect, useState } from 'react'
import './Description.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import axios from '../../api/axios' 


export const Description = () => {

    const [isOpen, setIsOpen] = useState(false);

    const open = () => setIsOpen(true);

    const [exposition, setExposition] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/expositions/1`)
      .then(response => setExposition(response.data));
  }, []);

  if (!exposition) {
    return;
  }

    return (
        <div>
            <div className={`description  ${isOpen ? "active" : ""}`}>
                <div className="Apropos">
                    <h4 className="font-bold">À propos</h4>
                    <p className="text-base">
                    {exposition.descriptionDetails}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget justo nisi. Proin luctus id magna vitae blandit. Nullam accumsan aliquam nunc et dictum. Donec ipsum eros, tristique eu lectus.
                    </p>
                </div>
            </div>
            <button id='open' onClick={open} className={`relative pb-6 flex flex-col text-left ${isOpen ? "close" : ""}`}>
                <h4 className="font-bold">À propos</h4>
                <p className="text-base">
                {exposition.description}...
                </p>
                <div className="more flex justify-center absolute left-0 bottom-0">
                    <FontAwesomeIcon className="icon relative top-3/4" icon={faChevronDown} />
                </div>
            </button>
        </div>
    )
}

export default Description;