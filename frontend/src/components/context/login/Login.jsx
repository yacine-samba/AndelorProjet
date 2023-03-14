import React, { useState } from 'react';
import axios from '../../../api/axios';
import './Login.css';
import { Button } from '../../button/Button';
import { useNavigate } from "react-router-dom";

import { profilservices } from '../../../services/profilservices'; 
import Guest from '../../guest/Guest';

export const Login = ({path}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/login', {
                email: email,
                password: password,
            });
            console.log(response.data);
            profilservices.saveToken(response.data.token);
            // rediriger l'utilisateur vers une page d'accueil
            navigate(path); 

        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <h1>Bonjour !</h1>
            <p>Pour finaliser votre commande, connecter vous avec votre compte ou continuer en tant qu’invité.</p>
            <form className="form flex flex-col items-center w-full" onSubmit={handleSubmit}>
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
                    Se connecter
                </Button>
                <p className="my-4">Pas encore inscrit ? <a href="/inscription" className="link">S’inscrire</a> </p>
                {error && <p>{error}</p>}
                <Guest />
            </form>

        </div>
    )
}

export default Login