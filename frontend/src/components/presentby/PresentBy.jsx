import React from 'react'

export const PresentBy = ({link, name}) => {
  return (
    <div>
      <a href={link}>
      <p className="m-auto flex w-full text-lg py-6">
        {name}
      </p>
      </a>
    </div>
  )
}

export default PresentBy;