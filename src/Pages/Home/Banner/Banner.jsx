import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = ["Developer.", "Professional Coder.", "UI/UX Designer."];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [texts.length]);

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse lg:gap-96">
        {/* img section */}
        <img
          src="/banner-01.png"
          className="sm:w-1/2 lg:w-1/3 rounded-lg shadow-2xl"
        />

        {/* user info section */}
        <div className="mt-10 lg:mt-0">
          <h6 className="text-sm">WELCOME TO MY WORLD</h6>
          <h1 className="text-5xl font-bold my-3">
            Hi, I’m <span className="text-orange-500">Mahbub</span>
          </h1>
          <h3 className="text-3xl font-bold">
            a <span>{texts[currentTextIndex]}</span>
          </h3>
          <div className="mt-10 lg:mt-24">
            <h5 className="mb-4 font-semibold">Connect With Me</h5>
            <div className="flex gap-4">
              <Link to="/" className="btn shadow-xl">
                <FaLinkedinIn></FaLinkedinIn>
              </Link>
              <Link to="/" className="btn shadow-xl mx-3">
                <FaFacebookF></FaFacebookF>
              </Link>
              <Link to="/" className="btn shadow-xl">
                <FaYoutube></FaYoutube>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
