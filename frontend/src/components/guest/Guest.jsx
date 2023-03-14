import React from 'react'
import './Guest.css'

export const Guest = () => {
  return (
    <div className="guest flex flex-col my-4 text-center font-bold">
        <div className="flex flex-row items-center">
            <span className="line line1"></span>
            <h4 className="mx-4">OU</h4>
            <span className="line line2"></span>
        </div>
        <a href="/tickets" className=' my-4'>
        Continuer en tant qu’invité
        </a>
    </div>
  )
}

export default Guest;