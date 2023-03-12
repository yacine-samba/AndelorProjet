import React from 'react'
import { useNavigate } from "react-router-dom";
import { profilservices } from '../services/profilservices';

export const Profil = () => {

  let navigate = useNavigate();

  const logout = () => {
    profilservices.logout();
    navigate('/');
  }

  const tokenInfo = profilservices.getTokenInfo();

  return (
    <div>
      <h1>Bonjour {tokenInfo.prenom} !</h1>
      <p>Votre E-mail {tokenInfo.email} !</p>
      <button type="submit" onClick={logout}>
        Déconnexion
      </button>
    </div>
  )
}

export default Profil