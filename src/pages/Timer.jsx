import { useState, useEffect } from "react";
import { BsFillPlayFill, BsPauseFill, BsFillStopFill } from 'react-icons/bs';
import { SoundSelector } from '../components/SoundSelector';
import PropTypes from 'prop-types';

const TIME_PRESETS = [
  { label: '5 Minutes', value: 300 },
  { label: '10 Minutes', value: 600 },
  { label: '15 Minutes', value: 900 },
];

export const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [maxSeconds, setMaxSeconds] = useState(TIME_PRESETS[2].value);
  const [isActive, setIsActive] = useState(false);
  const [, setSelectedSounds] = useState([]);

  useEffect(() => {
    let interval;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else {
      clearInterval(interval);
      setIsActive(false);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const stopTimer = () => {
    setIsActive(false);
    setSeconds(0);
    setSelectedSounds([]);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const calculateCircleProgress = (seconds) => {
    return (seconds / maxSeconds) * 100;
  };

  return (
    <div className="md:h-[calc(100vh-136px)] flex flex-col justify-center items-center">
      <div className="flex flex-col items-center space-y-6 text-white w-full">
        <TimerDisplay seconds={seconds} calculateCircleProgress={calculateCircleProgress} formatTime={formatTime} />
        <TimerPresets setSeconds={setSeconds} setMaxSeconds={setMaxSeconds} />
        <TimerControls isActive={isActive} setIsActive={setIsActive} stopTimer={stopTimer} seconds={seconds} />
        <h2 className="text-center mx-auto">Create your perfect soundtrack, you can select multiple tracks at a time.</h2>
        <SoundSelector setSelectedSounds={setSelectedSounds} timerIsActive={isActive} />
      </div>
    </div>
  );
}

const TimerDisplay = ({ seconds, calculateCircleProgress, formatTime }) => (
  <div className="relative w-64 h-64">
    <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="45" fill="transparent" stroke="transparent" strokeWidth="5" strokeLinecap="round" />
      <circle cx="50" cy="50" r="45" fill="none" stroke="#fff" strokeWidth="1" strokeDasharray="283" strokeDashoffset={`${283 - (283 * calculateCircleProgress(seconds) / 100)}`} strokeLinecap="round" />
    </svg>
    <div className="text-6xl font-extralight z-10 relative flex justify-center items-center w-full h-full">
      {formatTime(seconds)}
    </div>
  </div>
);

const TimerPresets = ({ setSeconds, setMaxSeconds }) => (
  <div className="flex space-x-2">
    {TIME_PRESETS.map(preset => (
      <button
        key={preset.value}
        onClick={() => { setSeconds(preset.value); setMaxSeconds(preset.value); }}
        className="text-xs md:text-sm hover:bg-white hover:text-rose-500 dark:hover:text-slate-700 border-2 text-white px-3 lg:px-4 py-2 uppercase rounded tracking-wider cursor-pointer"
      >
        {preset.label}
      </button>
    ))}
  </div>
);

const TimerControls = ({ isActive, setIsActive, stopTimer, seconds }) => (
  <div className="flex space-x-4">
    <button
      onClick={() => {
        if (!isActive && seconds === 0) {
          alert("Please, select a preset time before starting.");
        } else {
          setIsActive(!isActive);
        }
      }}
      className="hover:bg-gradient-to-r hover:from-teal-600 hover:to-emerald-500 border-2 text-white px-4 py-2 uppercase rounded tracking-wider cursor-pointer flex items-center space-x-2"
    >
      {isActive ? <BsPauseFill /> : <BsFillPlayFill />}
      <span>{isActive ? 'Pause' : 'Start'}</span>
    </button>
    <button
      onClick={stopTimer}
      className="hover:bg-gradient-to-r hover:from-rose-800 hover:to-rose-600 border-2 text-white px-4 py-2 uppercase rounded tracking-wider cursor-pointer flex items-center space-x-2"
    >
      <BsFillStopFill />
      <span>Stop</span>
    </button>
  </div>
);

TimerDisplay.propTypes = {
  seconds: PropTypes.number.isRequired,
  calculateCircleProgress: PropTypes.func.isRequired,
  formatTime: PropTypes.func.isRequired,
};

TimerControls.propTypes = {
  isActive: PropTypes.bool.isRequired,
  setIsActive: PropTypes.func.isRequired,
  stopTimer: PropTypes.func.isRequired,
  seconds: PropTypes.number.isRequired,
};

TimerPresets.propTypes = {
  setSeconds: PropTypes.func.isRequired,
  setMaxSeconds: PropTypes.func.isRequired,
};