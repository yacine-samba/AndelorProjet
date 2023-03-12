import React, { useState } from 'react';
import axios from '../../../api/axios';
import './NewReservation.css'
import { Button } from '../../button/Button';
import { useNavigate } from "react-router-dom";

import { profilservices } from '../../../services/profilservices';


export const NewReservation = ({ path }) => {
    const [email, setEmail] = useState("");
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [telephone, setTelephone] = useState("");
    const [date, setDate] = useState("");
    const [heure, setTime] = useState("");
    const [error, setError] = useState("");
    let navigate = useNavigate();


    const [count, setCount] = useState(1);
    const [showDiv, setShowDiv] = useState(false);

    const handleIncrement = () => {
        if (count < 10) {
            setCount(count + 1);
        }
    };

    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const decrementButtonStyle = {
        color: count === 1 ? 'var(--color-grey)' : 'var(--text-color)'
    };

    const incrementButtonStyle = {
        color: count === 10 ? 'var(--color-grey)' : 'var(--text-color)'
    };


    const handleMouseEnter = () => {
        if (count === 10) {
            setShowDiv(true);
        }
    };

    const handleMouseLeave = () => {
        if (count === 10) {
            setShowDiv(false);
        }
    };
    
    const handleTimeChange = (event) => {
        setTime(event.target.value);
      }



    const handleSubmit = async (e) => {
        e.preventDefault();
        // const data = {
        //     nom: nom,
        //     prenom: prenom,
        //     telephone: telephone,
        //     email: email,
        //     nombre_billet: count,
        //     date_reservation: date,
        //     heure_reservation: heure,
        //     exposition_id: 1
        // }

        // console.log(data);

        try {
            const response = await axios.post('/api/reservation', {
                nom: nom,
                prenom: prenom,
                telephone: telephone,
                email: email,
                nombre_billet: count,
                date_reservation: date,
                heure_reservation: heure,
                exposition_id: 1
            });
            if (response.status === 200) {
                console.log(response.data);
                profilservices.saveRes(response.data);
                navigate(path);
            }

        } catch (error) {
            setError(error.message);
        }
    };

    const time = [];

    for (let heure = 10; heure <= 18; heure++) {
        time.push(
            <option key={heure} value={heure}>
                {heure}:00
            </option>
        );
    }


    return (
        <div>
            <form className="form flex flex-col items-center w-full" onSubmit={handleSubmit}>



                <div className="input w-full">
                    <input
                        type="text"
                        id="prenom"
                        className="input-field"
                        value={prenom}
                        onChange={(e) => setPrenom(e.target.value)}
                        required
                    />
                    <label htmlFor="prenom" className="input-label">Prenom</label>
                </div>

                <div className="input w-full">
                    <input
                        type="text"
                        id="nom"
                        className="input-field"
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                        required
                    />
                    <label htmlFor="nom" className="input-label">Nom</label>
                </div>

                <div className="input w-full">
                    <input
                        type="tel"
                        id="telephone"
                        className="input-field"
                        value={telephone}
                        onChange={(e) => setTelephone(e.target.value)}
                        required
                    />
                    <label htmlFor="telephone" className="input-label">Telephone</label>
                </div>

                <div className="input w-full">
                    <input
                        type="email"
                        id="email"
                        className="input-field"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label htmlFor="email" className="input-label">E-mail</label>
                </div>

                <div className="flex flex-row justify-around w-full">
                    <input
                        type="date"
                        id="date"
                        className="input-field"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />

                    <select className="input-field" onChange={handleTimeChange} required>
                    <option value="">Heure de votre réservation</option>
                        {time}
                    </select>
                </div>


                <div className="ticket">
                    <h4>BILLETS</h4>
                    <p>Visite gratuite</p>
                    <div className="ticketnew">
                        <button type="button" className="buttonTicket" onClick={handleDecrement} style={decrementButtonStyle}>-</button>
                        <span>{count}</span>
                        <button type="button" className="buttonTicket" onClick={handleIncrement} style={incrementButtonStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>+</button>
                        {showDiv && count === 10 && (
                            <div className="AddInfo">
                                <p>Max 10 billets par personne pour l'expo. On veut que tout le monde en profite ! :)</p>
                            </div>
                        )}
                    </div>
                </div>

                <Button onClick={handleSubmit} type="submit">
                    Confirmer ma resrevation
                </Button>
                {error && <p className="text-red-500 ">{error}</p>}

            </form>

        </div>
    )
}

export default NewReservation;