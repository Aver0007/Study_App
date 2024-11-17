import React, {useState} from 'react'
import Timer from './Timer'
import Working from './Working'
import './TimeApp.css'
import SettingsContext from './SettingsContext'

function TimerApp() {
    const [count, setCount] = useState(0)

    const[showSettings, setShowSettings]=useState(false);
    const[workMinutes, setWorkMinutes]=useState(45);
    const[breakMinutes, setBreakMinutes]=useState(1);
  
    return (
      <div className=' h-screen w-full app pt-20 m-auto text-center bg-zinc-900 '>
        <SettingsContext.Provider value={{
          workMinutes,
          breakMinutes,
          setWorkMinutes,
          setBreakMinutes,
          showSettings,
          setShowSettings,
        }}>
        {showSettings ? <Working/> : <Timer/> }
        </SettingsContext.Provider>
      </div>
    )
}

export default TimerApp