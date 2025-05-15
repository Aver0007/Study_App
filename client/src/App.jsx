import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import LandingPage from './Components/LandingPage';
import Marquee from './Components/Marquee';
import Card from './Components/Card';
import About from './Components/About';
import Footer from './Components/Footer';
import TimerApp from './Components/TimerApp';
import PublicTimerApp from './Components/PublicTimerApp';
import Login from './Components/Login';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';
import GraphPage from './Components/GraphPage';

function App() {
  const isAuthenticated = !!localStorage.getItem('token'); 

  return (
    <Router>
      <div className='w-full h-screen bg-zinc-900 text-white'>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Navbar />
                <LandingPage />
                <Marquee />
                <About />
                <Card />
                <Footer />
              </>
            }
          />
          <Route path="/timer" element={<PublicTimerApp />} />
          <Route path='/about' element={<About />} />
          <Route path='/motivation' element={<Card />} />
          <Route path='/start' element={<LandingPage />} />
          <Route path='/register' element={<Register />} />
          <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/study-tracker" element={<TimerApp/>} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/study-graph" element={<GraphPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
