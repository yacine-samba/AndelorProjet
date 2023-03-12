import React from 'react'
import { Prism } from '../components/prism/Prism';
import { Separator } from '../components/separator/Separator'
import { NewReservation } from '../components/context/newreservation/NewReservation';

export const Tickets = () => {
  return (
    <div className='h-full m8 pt-6 p-4'>
      <Prism />
      <Separator />
      <h2>Information personnelles</h2>
      <NewReservation path={"/confirmation-reservation"} />

    </div>
  )
}

export default Tickets