import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

export const AudioPlayer = ({ src, isPlaying, volume }) => {
    const audioRef = useRef(null);

    useEffect(() => {
        const audioElement = audioRef.current;
        if (!audioElement) return;

        if (isPlaying) {
            audioElement.play();
        } else {
            audioElement.pause();
        }

        audioElement.volume = volume;
    }, [isPlaying, volume]);

    return (
        <audio ref={audioRef} src={src} loop />
    );
}

AudioPlayer.propTypes = {
    src: PropTypes.string.isRequired,
    isPlaying: PropTypes.bool.isRequired,
    volume: PropTypes.number.isRequired
}