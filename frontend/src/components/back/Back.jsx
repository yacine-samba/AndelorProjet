import React from 'react'
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export const Back = ({path}) => {
    let navigate = useNavigate();

    return (
          <button onClick={() => navigate(path)}>
            <FontAwesomeIcon className="mr-2" icon={faChevronLeft}/>Retour
          </button>
    );
}

export default Back;
