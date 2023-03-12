import React, { useState } from 'react';
import axios from '../../../api/axios';
import './Register.css';
import { Button } from '../../button/Button';
import { useNavigate } from "react-router-dom";

import { profilservices } from '../../../services/profilservices'; 

export const Register = ({path}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [telephone, setTelephone] = useState("");
    const [error, setError] = useState("");
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/register', {
                email: email,
                password: password,
                nom: nom,
                prenom: prenom,
                telephone: telephone,
            });
            console.log(response.data);
            profilservices.saveToken(response.data.token);
            // rediriger l'utilisateur vers une page d'accueil
            navigate(path); 

        } catch (error) {
            console.log(error);
            if (error.response && error.response.status === 409) {
                setError('Un compte avec cette adresse e-mail existe déjà.');
              }
              else if (error.response && error.response.status === 500) {
                setError('Erreur 500, connexion avec la base de donnée interrompu');
              }
        }
    };

    return (
        <div>
            <h1>Inscription</h1>
            <form className="form flex flex-col items-center w-full" onSubmit={handleSubmit}>

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
                

                <div className="input w-full">
                    <input
                        type="password"
                        id="password"
                        className="input-field"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <label htmlFor="password" className="input-label">Mot de passe</label>
                </div>

                <Button type="submit">
                    Créer un compte
                </Button>
                {error && <p className="text-red-500 ">{error}</p>}

            </form>

        </div>
    )
}

export default Register;