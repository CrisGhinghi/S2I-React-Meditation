import meditation from "../assets/img/meditation.png";
import { useNavigate } from "react-router-dom";

export const Home = () => {

    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate("/timer");
    }

    return (
        <section className="h-[calc(100vh-88px)] lg:h-[calc(100vh-104px)] flex flex-col md:flex-row justify-center items-center pb-8 lg:pb-20 text-center lg:text-left">

            {/* text and button */}
            <div className="md:order-2 flex justify-center items-center md:w-1/2">
                <div className="text-center md:text-left w-full">
                    <h2 className="text-6xl md:text-8xl font-letgo">
                        Let go
                    </h2>
                    <h3 className="text-lg md:text-2xl font-extralight">
                        Unleash your energy centers
                    </h3>
                    <button
                        onClick={handleGetStarted}
                        className="mt-6 lg:mt-8 border-2 px-4 py-2 text-sm lg:text-base uppercase rounded hover:bg-white hover:text-rose-500 dark:hover:text-slate-700 text-white tracking-wider cursor-pointer hover:scale-105 duration-300 ">
                        Get Started
                    </button>
                </div>
            </div>

            {/* img */}
            <div className="flex justify-center md:w-1/2">
                <img
                    src={meditation}
                    alt="avatar"
                    className="md:max-h-[80vh]"
                />
            </div>

        </section>
    )
}