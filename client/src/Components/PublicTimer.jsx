import React, { useContext, useEffect, useRef, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Play from './Play';
import Pause from './Pause';
import Settings from './Settings';
import SettingsContext from './SettingsContext';

function PublicTimer() {
  const settingsInfo = useContext(SettingsContext);
  const [isPaused, setIsPaused] = useState(true);
  const [mode, setMode] = useState('work');
  const [secondsLeft, setSecondsLeft] = useState(settingsInfo.workMinutes * 60);

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);
  const intervalRef = useRef(null);

  function switchMode() {
    clearInterval(intervalRef.current);

    const nextMode = modeRef.current === 'work' ? 'break' : 'work';
    const nextSeconds = (nextMode === 'work' ? settingsInfo.workMinutes : settingsInfo.breakMinutes) * 60;

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
    }, 1000);
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

  return (
    <div className="flex flex-col items-center">
      <div className="w-84 h-84">
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
      <div className="mt-20 flex gap-20">
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
      <div className="mt-10">
        <Settings
          onClick={() => {
            settingsInfo.setShowSettings(true);
          }}
        />
      </div>
    </div>
  );
}

export default PublicTimer;