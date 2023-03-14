import React from 'react'
import { Prism } from '../components/prism/Prism';
import { Separator } from '../components/separator/Separator'
// import { NewReservation } from '../components/context/newreservation/NewReservation';
import NewReservation1 from '../components/context/newreservation/NewReservation1';

export const Tickets = () => {
  return (
    <div className='h-full m8 pt-6 p-4'>
      <Prism />
      <Separator />
      <NewReservation1 path={"/confirmation-reservation"} />

    </div>
  )
}

export default Tickets;