import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home';
import AboutPage from './components/About';
//import AboutPage from './components/AboutPage';
//import ContactPage from './components/ContactPage';
import Navbar from './components/Navbar'; // Adjust the path based on your folder structure
import GoogleMapComponent from './components/GoogleMap'; // Import the map component

const App = () => {
  return (

    <Router>
         <Navbar /> {/* Navbar appears on all pages */}
      <Routes>
      <Route path="/About" element={<AboutPage />} />
      <Route path="/map" element={<GoogleMapComponent />} />
      <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
