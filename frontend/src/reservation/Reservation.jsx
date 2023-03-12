import React, {useState} from 'react'
import './Reservation.css'
import { Back } from '../components/back/Back'
// import { Login } from '../components/context/login/Login'
import { Register } from '../components/context/register/Register'
// import { Guest } from '../components/context/guest/Guest';


export const Reservation = () => {
  const [showRegister, setShowRegister] = useState(true); // état local pour déterminer quel composant doit être affiché
  

  const [activeButton, setActiveButton] = useState("register");

  const handleButtonClick = (button) => {
    setActiveButton(button);
  }


  return (
    <div className="h-full m8 pt-6 p-4">
      <Back path={"/exposition"} />

      {/* bouton pour changer l'état d'un composant */}
      <div className=" buttonState flex justify-center mt-8">
        <button className={`button ${activeButton === "register" ? "active" : ""}`}
        onClick={() => {setShowRegister(true); handleButtonClick("register");}}>
          Register</button>
        <button className={`button ${activeButton === "guest" ? "active" : ""}`} 
        onClick={() => {setShowRegister(false); handleButtonClick("guest");}}>Guest</button>
      </div>

      {/* affiche le composant d'inscription si showRegister est vrai */}
      {showRegister ? <Register path={"/tickets"} /> : null}

      {/* affiche le composant d'invité si showRegister est faux */}
      {/* {!showRegister ? <Guest path={"/tickets"} /> : null} */}

    </div>
  )
}

export default Reservation;