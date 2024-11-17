import React, { useContext } from 'react';
import SettingsContext from './SettingsContext';
import ReactSlider from 'react-slider';
import BackButton from './BackButton';

function Working() {
    const settingsInfo = useContext(SettingsContext);
    return (
      <div className='text-left mx-20 '>
          <div>
          <label className=' block mb-10 mt-20 capitalize'>Work Minutes: {settingsInfo.workMinutes}:00</label>
          </div>
          <ReactSlider className='slide h-[40px] border-2 border-red-600 border-r-20 rounded-full cursor-pointer' 
          thumbClassName='thumb' 
          trackClassName='track' 
          value={settingsInfo.workMinutes} 
          onChange={newValue=>settingsInfo.setWorkMinutes(newValue)}
          min={1} 
          max={120}/>
          <div>
          <label className=' block mb-10 mt-20 capitalize'>Break Minutes: {settingsInfo.breakMinutes}:00</label>
          </div>
          <ReactSlider className='slide h-[40px] border-2 border-green-500 border-r-20 rounded-full cursor-pointer' 
          thumbClassName='thumb green' 
          value={settingsInfo.breakMinutes} 
          onChange={newValue=>settingsInfo.setBreakMinutes(newValue)}
          min={1} 
          max={120}/>
          <div className='text-center flex justify-center'>
          <BackButton onClick={()=>{settingsInfo.setShowSettings(false)}}/>
          </div>
      </div>
    )
}

export default Working