import React from 'react'
import { Button } from '../components/button/Button';


export const Home = () => {
  return (
    <div className="home h-full m8 pt-6 p-4">
      <div className="flex flex-col items-center mt-44 h-screen">
      <h1 className='AndelorTitle'>Andelor</h1>
      <h3>Une symphonie des sens</h3>
      <a href="#discover">
        <Button type="submit">Découvrir</Button>
      </a>
    </div>
    <div id="discover" className="section h-full">
      <h1>Titre</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique vel repellendus, alias unde error ut corporis.</p>
      <a href="/exposition/1">
      <Button>En savoir plus</Button>
      </a>
    </div>
    </div>
  );
}

export default Home;


