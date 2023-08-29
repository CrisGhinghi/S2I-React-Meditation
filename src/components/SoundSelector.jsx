import { useState, useEffect } from 'react';
import { SoundItem } from './SoundItem';
import { AudioPlayer } from './AudioPlayer';
import { sounds } from './data/SoundsData';
import PropTypes from 'prop-types';

export const SoundSelector = ({ setSelectedSounds, timerIsActive }) => {
    const [selectedSounds, setInternalSelectedSounds] = useState([]);
    const [immediatePlay, setImmediatePlay] = useState([]);
    const playingSounds = timerIsActive ? selectedSounds.map(s => s.src) : immediatePlay;

    const handleSoundClick = (soundSrc) => {
        if (selectedSounds.some(sound => sound.src === soundSrc)) {
            setInternalSelectedSounds(prev => prev.filter(s => s.src !== soundSrc));
            setImmediatePlay(prev => prev.filter(s => s !== soundSrc));
        } else {
            setInternalSelectedSounds(prev => [...prev, { src: soundSrc, volume: 0.5 }]);
            setImmediatePlay(prev => [...prev, soundSrc]);
        }
    };

    const handleVolumeChange = (soundSrc, volume) => {
        const numericVolume = parseFloat(volume);
        setInternalSelectedSounds(prev => prev.map(sound => sound.src === soundSrc ? { ...sound, volume: numericVolume } : sound
        )
        );
    };

    useEffect(() => {
        setSelectedSounds(selectedSounds);
    }, [selectedSounds, setSelectedSounds]);

    return (
        <div className="flex flex-col justify-center items-center w-full pb-6">
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-10 w-4/5">
                {sounds.map(sound => (
                    <SoundItem
                        key={sound.name}
                        sound={sound}
                        isSelected={selectedSounds.some(s => s.src === sound.src)}
                        volume={selectedSounds.find(s => s.src === sound.src)?.volume}
                        onSoundClick={handleSoundClick}
                        onVolumeChange={handleVolumeChange} />
                ))}

                {selectedSounds.map(sound => (
                    <AudioPlayer
                        key={sound.src}
                        src={sound.src}
                        isPlaying={playingSounds.includes(sound.src)}
                        volume={sound.volume} />
                ))}
            </div>
        </div>
    );
}

SoundSelector.propTypes = {
    setSelectedSounds: PropTypes.func.isRequired,
    timerIsActive: PropTypes.bool.isRequired
};