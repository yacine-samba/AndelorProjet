import React from 'react'
import './App.css';
import { Header } from './components/header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './home/Home';
import { Andelorapi } from './exposition/Andelorapi';
import { Reservation } from './reservation/Reservation';
import { Tickets } from './reservation/Tickets';
// import { Profil } from './profil/Profil';
import { Error } from './utils/Error';
// import { AuthGuard } from './services/AuthGuard';
import ConfirmationRes from './Confirmation/ConfirmationRes';
import Auth from './auth/Auth';



function App() {

  return (
    <div className="h-screen">
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exposition/1" element={<Andelorapi />} />
          {/* <Route path="/profil" element={
            <AuthGuard path="/connexion">
              <Profil />
            </AuthGuard>
          } /> */}
          {/* <Route path="/reservation" element={<Reservation />} /> */}
          <Route path="/authentification" element={<Auth />} />
          <Route path="/tickets" element={ <Tickets />} />
          <Route path="/confirmation-reservation" element={ <ConfirmationRes />} />          
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
