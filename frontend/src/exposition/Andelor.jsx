import React from 'react'
import { Back } from '../components/back/Back'
import { Prism } from '../components/prism/Prism'
import { Popup } from '../components/popup/Popup'
import { Description } from '../components/description/Description'
import { Separator } from '../components/separator/Separator'
import { faCircleInfo, faPlay, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../components/button/Button';

export const Andelor = () => {
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
      <a href="https://www.yacine-samba.fr">
      <p className="m-auto flex w-full text-lg py-6">Présenté par WebStory</p>
      </a>
      <Separator />
      <Separator />
      <Popup textPopup={"Information sur l'éxposition"} text={"Besoin d'aide"} icon={faCircleInfo}/>
      <p>Visite gratuite</p>
      <a href="/tickets">
      <Button>Réserver</Button>
      </a>
      
    </div>
  )
}

export default Andelor;