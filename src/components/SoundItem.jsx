import PropTypes from 'prop-types';

export const SoundItem = ({ sound, isSelected, volume, onSoundClick, onVolumeChange }) => {
  return (
    <div className="flex flex-col items-center p-2 rounded transition-colors duration-300">
        <button
            onClick={() => onSoundClick(sound.src)}
            className="flex flex-col items-center space-y-2"
        >
            <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-white dark:bg-rose-500 hover:bg-lime-500 dark:hover:bg-white text-lime-500 dark:text-white hover:text-white dark:hover:text-rose-500 rounded-full">
                {sound.icon}
            </div>
            <span className='text-xs md:text-sm'>{sound.name}</span>
        </button>
        {isSelected && (
            <div className="flex items-center space-x-2 w-2/3 justify-center">
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={(e) => onVolumeChange(sound.src, e.target.value)}
                    className="mx-2 flex-grow w-20"
                />
            </div>
        )}
    </div>
  )
}

SoundItem.propTypes = {
    sound: PropTypes.object.isRequired,
    isSelected: PropTypes.bool.isRequired,
    volume: PropTypes.number,
    onSoundClick: PropTypes.func.isRequired,
    onVolumeChange: PropTypes.func.isRequired
};