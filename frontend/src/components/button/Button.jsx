import React from 'react'
import './Button.css';
import { useNavigate } from "react-router-dom";

export const Button = ({path, children}) => {


  let navigate = useNavigate();

  return (
    <button onClick={() => navigate(path)} className='Button mt-6'>
      {children}
    </button>
  );
};