import React, { useEffect, useState } from 'react'
import axios from '../api/axios' 
import { Back } from '../components/back/Back'
import { Separator } from '../components/separator/Separator'
import { Prism } from '../components/prism/Prism'
import { PresentBy } from '../components/presentby/PresentBy'
import { Description } from '../components/description/Description'
import { faCircleInfo, faPlay, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { Popup } from '../components/popup/Popup'
import { Button } from '../components/button/Button';




export const Andelorapi = () => {
  const [exposition, setExposition] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/expositions/1`)
      .then(response => setExposition(response.data));
  }, []);

  // useEffect(() => {
  //     fetch(`http://127.0.0.1:8000/api/expositions/1`)
  //         .then(response => response.json())
  //         .then(data => setExposition(data));
  // }, []);

  if (!exposition) {
    return <div>Chargement...</div>;
  }

  return (
    
    <div className="h-full m8 pt-6 p-4">
      <Back path={"/"}/>
      <Prism/>
      <Separator />
      <Popup textPopup={"Vidéo présentation exposition"} text={"Teaser de l’exposition"} icon={faPlay}/> {/* Voir comment intégrer du html dans un props */}
      <Separator />
      <Popup textPopup={"Voici un lien d'invitation pour invitez tous vos ami.e.s"} text={"Invitez vos ami.e.s"} icon={faUserFriends}/>
      <Separator />
      <Description />
      <Separator />
      <PresentBy 
      link="https://yacine-samba.fr"
      name="Présenté par WebStory"
      />
      <Separator />
      <Popup textPopup={"Information sur l'éxposition"} text={"Besoin d'aide"} icon={faCircleInfo}/>
      <Separator />
      <p>Visite gratuite</p>
      <Button path="/tickets">
        Réserver
      </Button>
    </div>
  );
}

export default Andelorapi;