import logo from "../assets/img/logo.png";
import { MdNightsStay, MdWbSunny } from 'react-icons/md'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export const Header = ({ darkMode, setDarkMode }) => {
    const handleDarkModeToggle = () => {
        setDarkMode(!darkMode);
    };

    return (
        <header>
            <nav className='flex justify-between items-center p-5'>
                <div className='flex items-center'>
                    <img src={logo} alt="logo" className='mr-2 h-10 lg:h-14 w-10 lg:w-14 align-middle mb-2' />
                    <Link to="/"> {/* Aggiunto il componente Link */}
                        <h1 className='text-3xl lg:text-4xl align-middle cursor-pointer font-letgo'>Let go</h1>
                    </Link>
                </div>
                <button
                    onClick={handleDarkModeToggle}
                    aria-label="Toggle dark mode"
                    className='focus:outline-none'
                >
                    {
                        darkMode ? (
                            <MdWbSunny className='text-2xl cursor-pointer' />
                        ) : (
                            <MdNightsStay className='text-2xl cursor-pointer' />
                        )
                    }
                </button>
            </nav>
        </header>
    )
}

Header.propTypes = {
    darkMode: PropTypes.bool.isRequired,
    setDarkMode: PropTypes.func.isRequired
}