import React from 'react'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import Marquee from './Components/Marquee'
import About from './Components/About'
import Card from './Components/Card'
import Footer from './Components/Footer'
import LocomotiveScroll from 'locomotive-scroll';
import TimerApp from './Components/TimerApp'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login'
import Registration from './Components/Registration'
import Dashboard from './Components/Dashboard'
function App() {


 

const locomotiveScroll = new LocomotiveScroll();

  return (
    <Router>
    <div className='w-full h-screen bg-zinc-900 text-white'>
      <Routes>
        <Route
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
        <Route path="/timer" element={<TimerApp />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/motivation' element={<Card/>}/>
        <Route path='/start' element={<LandingPage/>}/>
        <Route path='/register' element={<Registration/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>


      </Routes>
    </div>
  </Router>
  )
}

export default App
