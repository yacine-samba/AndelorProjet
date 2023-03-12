import React from 'react'
import { Back } from '../components/back/Back'
import { Login } from '../components/context/login/Login'

export const Connexion = () => {
  
  return (
    <div className="h-full m8 pt-6 p-4">
        <Back path={"/"} />
        <h1>Bonjour!</h1>
        <p>Pour acceder à votre commande, connecter vous.</p>
        <Login path={"/profil"}/>
        
    </div>
  )
}

export default Connexion;