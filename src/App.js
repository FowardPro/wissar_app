// App.js

import React, { useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import WelcomeVideo from './components/WelcomeVideo';
import MiddelVideo from './components/MiddelVideo';
import UpcomingEvents from './components/UpcomingEvents';
import CreateAccount from './CreateAccount';
import Footer from './components/Footer';
import Registration from './components/Registration'; // Import the Registration component
import './App.css';

function App() {
  const signupRef = useRef(null);

  const scrollToSignUp = () => {
    signupRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Header />
      <WelcomeVideo scrollToSignUp={scrollToSignUp} />
      <main>
        <div className='change_background1'>
          <h2>Welcome to Wissar</h2>
          <p>Your platform for booking artists.</p>
        </div> 
        <UpcomingEvents />
        <div className='change_background1'>
          <h2>South African Best Artists</h2>
          <p>Booking artists has never been this easy.</p>
        </div>
        <MiddelVideo />
        <div className='change_background'>
          <h2 ref={signupRef}>SignUp with Wissar</h2>
          <p>Booking artists has never been this easy.</p>
        </div>        
        <Routes>
          <Route path="/" element={<CreateAccount />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
