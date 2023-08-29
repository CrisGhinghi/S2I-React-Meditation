import { FaFire, FaWater, FaBell } from 'react-icons/fa';
import { PiBirdFill } from 'react-icons/pi';
import { IoThunderstormSharp } from 'react-icons/io5';
import { BsFillCloudRainHeavyFill } from 'react-icons/bs';
import { GiJungle } from 'react-icons/gi';
import { BiSolidPiano } from 'react-icons/bi';
import { IoIosWater } from 'react-icons/io';

import bowl from '../../assets/sounds/bowl.mp3';
import campfire from '../../assets/sounds/campfire.wav';
import chirping from '../../assets/sounds/chirping.wav';
import water from '../../assets/sounds/water.wav';
import rain from '../../assets/sounds/rain.mp3';
import jungle from '../../assets/sounds/jungle.wav';
import pier from '../../assets/sounds/pier.wav';
import piano from '../../assets/sounds/piano.wav';
import storm from '../../assets/sounds/storm.wav';
import waves from '../../assets/sounds/waves.flac';

export const sounds = [
    {
        name: 'Bowl',
        icon: <FaBell size={24} />,
        src: bowl
    },
    {
        name: 'Campfire',
        icon: <FaFire size={24} />,
        src: campfire
    },
    {
        name: 'Chirping',
        icon: <PiBirdFill size={24} />,
        src: chirping
    },
    {
        name: 'Water',
        icon: <IoIosWater size={24} />,
        src: water
    },
    {
        name: 'Rain',
        icon: <BsFillCloudRainHeavyFill size={24} />,
        src: rain
    },
    {
        name: 'Jungle',
        icon: <GiJungle size={24} />,
        src: jungle
    },
    {
        name: 'Pier',
        icon: <FaWater size={24} />,
        src: pier
    },
    {
        name: 'Piano',
        icon: <BiSolidPiano size={24} />,
        src: piano
    },
    {
        name: 'Storm',
        icon: <IoThunderstormSharp size={24} />,
        src: storm
    },
    {
        name: 'Waves',
        icon: <FaBell size={24} />,
        src: waves
    },
];