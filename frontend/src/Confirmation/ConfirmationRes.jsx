import React from 'react'
import { Prism } from '../components/prism/Prism';
import { Separator } from '../components/separator/Separator'
import { Button } from '../components/button/Button';
import { profilservices } from '../services/profilservices';

export const ConfirmationRes = () => {


  return (
    <div className="h-full m8 pt-6 p-4">

      <h2>Confirmation de réservation</h2>
      <p>Bien joué ! Votre réservation pour l'exposition a bien été enregistrée.
        Préparez-vous à une expérience inoubliable !</p>
      <Prism />
      <p>Vous trouverez ci-dessous les informations relatives à votre réservation. Gardez un œil sur ces détails.</p>
      <Separator />
      <h3>Votre Visiste</h3>
      <div>
        <p>Date et heure :</p>
        <p className='text-slate-500'>{profilservices.getDate()} à {profilservices.getTime()}</p>
      </div>
      <Separator />
      <div className='flex flex-row justify-between'>
        <p>Nombre de billet.s :</p>
        <p>{profilservices.getTicket()}</p>
      </div>
      <Separator />
      <div>
        <div>
          <p>Nom complet : </p>
          <p className='text-slate-500'> {profilservices.getPrenom()} {profilservices.getNom()}</p>
        </div>
        <div>
          <p>Adresse e-mail : </p>
          <p className='text-slate-500'>{profilservices.getEmail()}</p>
        </div>
        <div>
          <p>Numéro de téléphone : </p>
          <p className='text-slate-500'>{profilservices.getTelephone()}</p>
        </div>
      </div>
      <Separator />
      <p>Vous recevrez une confirmation par email contenant les informations de votre réservation.
        Si vous avez des questions ou des préoccupations, n'hésitez pas à nous contacter.</p>
        <Button path="/">Retourner à l'accueil</Button>
    </div>
  )
}

export default ConfirmationRes;