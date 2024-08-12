import React from 'react';
import { Routes, Route } from 'react-router-dom'; // No need for Router here
import Header from './components/Header';
import WelcomeVideo from './components/WelcomeVideo';
import MiddelVideo from './components/MiddelVideo';
import UpcomingEvents from './components/UpcomingEvents';
import CreateAccount from './CreateAccount';
import Footer from './components/Footer';
import Registration from './components/Registration';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <WelcomeVideo />
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
          <h2>SignUp with Wissar</h2>
          <p>Booking artists has never been this easy.</p>
        </div>
        
        {/* Define the routes for the CreateAccount and Registration components */}
        <Routes>
          <Route path="/" element={<CreateAccount />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
