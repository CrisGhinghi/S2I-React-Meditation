import meditation from "../assets/img/meditation.png";
import { useNavigate } from "react-router-dom";

export const Home = () => {

    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate("/timer");
    }

    return (
        <section className="h-[calc(100vh-68px)] flex flex-col md:flex-row justify-center items-center pb-8 lg:pb-20 text-center lg:text-left">

            {/* text and button */}
            <div className="md:order-2 flex-grow flex justify-center items-center md:w-1/2">
                <div className="text-center md:text-left w-full">
                    <h2 className="mt-8 text-6xl md:text-8xl font-light uppercase">
                        LET GO
                    </h2>
                    <h3 className="text-xl md:text-3xl font-extralight">
                        Unleash your energy centers
                    </h3>
                    <button
                        onClick={handleGetStarted}
                        className="mt-10 border-2 px-6 py-3 uppercase rounded hover:bg-white hover:text-rose-500 dark:hover:text-slate-700 text-white tracking-wider cursor-pointer hover:scale-105 duration-300 ">
                        Get Started
                    </button>
                </div>
            </div>

            {/* img */}
            <div className="flex justify-center md:w-1/2">
                <img
                    src={meditation}
                    alt="avatar"
                    className="max-w-full h-full md:max-h-[80vh]"
                />
            </div>

        </section>
    )
}