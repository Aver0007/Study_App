import React, { useContext, useEffect, useRef, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Play from './Play';
import Pause from './Pause';
import Settings from './Settings';
import SettingsContext from './SettingsContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Timer() {
  const settingsInfo = useContext(SettingsContext);
  const [isPaused, setIsPaused] = useState(true);
  const [mode, setMode] = useState('work');
  const [secondsLeft, setSecondsLeft] = useState(settingsInfo.workMinutes * 60);
  const [isSessionLogged, setIsSessionLogged] = useState(false);
  const navigate = useNavigate();

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);
  const intervalRef = useRef(null);

  function switchMode() {
    clearInterval(intervalRef.current);

    const nextMode = modeRef.current === 'work' ? 'break' : 'work';
    const nextSeconds = (nextMode === 'work' ? settingsInfo.workMinutes : settingsInfo.breakMinutes) * 60;

    if (modeRef.current === 'work') {
      logSession(); // Log the session when work period ends
    }

    setMode(nextMode);
    modeRef.current = nextMode;
    setSecondsLeft(nextSeconds);
    secondsLeftRef.current = nextSeconds;

    setIsPaused(true);
    isPausedRef.current = true;
  }

  function tick() {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);

    if (secondsLeftRef.current === 0) {
      switchMode();
    }
  }

  function startTimer() {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!isPausedRef.current && secondsLeftRef.current > 0) {
        tick();
      }
    }, 1000); // Change to 1000ms for 1-second intervals
  }

  function initTimer() {
    const initialSeconds = mode === 'work' ? settingsInfo.workMinutes * 60 : settingsInfo.breakMinutes * 60;
    setSecondsLeft(initialSeconds);
    secondsLeftRef.current = initialSeconds;
  }

  useEffect(() => {
    initTimer();

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [settingsInfo]);

  useEffect(() => {
    if (!isPaused) {
      startTimer();
    } else {
      clearInterval(intervalRef.current);
    }
  }, [isPaused]);

  const totalSeconds = mode === 'work' ? settingsInfo.workMinutes * 60 : settingsInfo.breakMinutes * 60;
  const percentage = Math.round((secondsLeft / totalSeconds) * 100);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  const logSession = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('Token not found');
        return;
      }

      const durationInSeconds = totalSeconds - secondsLeftRef.current;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      // await axios.post('http://localhost:5000/studySessions', { duration: durationInSeconds }, config);
      await axios.post('https://studytrackerbackend-4vmo.onrender.com/studySessions', { duration: durationInSeconds }, config);
      setIsSessionLogged(true);
    } catch (error) {
      console.error('Error logging session:', error);
    }
  };

  const navigateToDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <div className="flex flex-col items-center h-full">
      <div className="flex justify-center items-center h-full">
        <div className="w-84 h-84 mt-1">
          <CircularProgressbar
            value={percentage}
            text={`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}
            styles={buildStyles({
              rotation: 0.25,
              strokeLinecap: 'round',
              textColor: '#fff',
              pathColor: mode === 'work' ? 'yellow' : 'green',
              trailColor: 'grey',
            })}
          />
        </div>
      </div>
      <div className="mt-3 flex gap-10">
        {isPaused ? (
          <Play
            onClick={() => {
              setIsPaused(false);
              isPausedRef.current = false;
              startTimer();
            }}
          />
        ) : (
          <Pause
            onClick={() => {
              setIsPaused(true);
              isPausedRef.current = true;
            }}
          />
        )}
      </div>
      <div className="mt-5">
        <Settings
          onClick={() => {
            settingsInfo.setShowSettings(true);
          }}
        />
      </div>
      <div className="mt-5 flex justify-end pr-8">
        <button
          onClick={navigateToDashboard}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-4 mb-5"
        >
          Go Back to Dashboard
        </button>
        {isSessionLogged && (
          <span className="text-green-600 ml-4">Session Logged!</span>
        )}
      </div>
    </div>
  );
}

export default Timer;