import { useState } from "react";
import { Link } from "react-router";
import { Typewriter } from "react-simple-typewriter";


const Banner = () => {

    const [dateType, setDateType] = useState("text");
    return (
        <div>
            <div
                className="h-[600px] w-full bg-[url('https://i.ibb.co/rRtPqj3C/vecteezy-wedding-stage-decoration-background-inside-the-building-with-43918635.jpg')] bg-cover bg-center bg-no-repeat flex items-c
justify-center"
            >
                <div className=" mt-25 bg-opacity-60 rounded-md text-center text-white max-w-xl">
                    <h1 className=" text-xl md:text-xl font-bold mb-2">
                        Simple. Organized. Stress-Free.
                    </h1>
                    <h2 className="text-xl md:text-3xl font-bold mb-6">
                        The Easy Way to Plan Your{' '}
                        <span className="text-pink-600 font-bold">
                            <Typewriter
                                words={['Dream', 'Perfect', 'Magical', 'Beautiful']}
                                loop={true}
                                cursor
                                cursorStyle="|"
                                typeSpeed={80}
                                deleteSpeed={50}
                                delaySpeed={1500}
                            />
                        </span>
                        Day
                    </h2>
                    <div className="join justify-center">
                        <input
                            type={dateType}
                            onFocus={() => setDateType("date")}
                            onBlur={(e) => !e.target.value && setDateType("text")}
                            placeholder="What's your event date?"
                            className="join-item px-7 py-3 text-lg bg-white text-black rounded-l-md w-64"
                            required
                        />
                        <Link to="auth/login">
                            <button className="btn join-item  bg-pink-200 dark:bg-pink-700 text-black dark:text-white  hover:bg-pink-300 text-lg px-10 py-8 rounded-r-md transition-colors duration-200">
                                Start Planning
                            </button>
                        </Link>
                    </div>
                    <p className="text-md">
                        Already have an account?{" "}
                        <Link to="/auth/login" className="text-pink-600 font-semibold hover:underline">
                            Sign in
                        </Link>

                    </p>

                </div>
            </div>
        </div>
    );
};

export default Banner;