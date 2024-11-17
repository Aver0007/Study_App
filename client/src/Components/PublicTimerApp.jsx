import React, {useState} from 'react'
import PublicTimer from './PublicTimer'
import Working from './Working'
import './PublicTimerApp.css'
import SettingsContext from './SettingsContext'

function PublicTimerApp() {
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
        {showSettings ? <Working/> : <PublicTimer/> }
        </SettingsContext.Provider>
      </div>
    )
}

export default PublicTimerApp;