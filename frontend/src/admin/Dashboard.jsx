import React, { useEffect } from 'react'
import { Navigate } from "react-router-dom";
import { profilservices } from '../services/profilservices';

export const Profil = () => {

    const logout = () => {
      profilservices.logout();
      <Navigate to={"/"} />
    }

    useEffect(() => {
        console.log('useEffect')
    }, [1])

  return (
    <div>
        <h1>Bonjour Name</h1>
        <div className="user">

        </div>
        <button type="submit" onClick={logout}>
        Déconnexion
        </button>
    </div>
  )
}

export default Profil