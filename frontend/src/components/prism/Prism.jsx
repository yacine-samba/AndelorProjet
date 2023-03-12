import React, { useEffect, useState } from 'react'
import prism from './prism.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import axios from '../../api/axios' 


export const Prism = () => {
    const [exposition, setExposition] = useState(null);

    useEffect(() => {
      axios.get(`http://127.0.0.1:8000/api/expositions/1`)
        .then(response => setExposition(response.data));
    }, []);
    
    if (!exposition) {
        return ;
      }

    return (
        <div>
            <img src={prism} alt="Présentation de l'éxposition" />
            <h3>{exposition.nom}</h3>
            <h4>Espace Canyon</h4>
            <p className='text-slate-500'>
                <FontAwesomeIcon className='mr-2' icon={faLocationDot} />
                Paris
            </p>
        </div>
    )
}

export default Prism;