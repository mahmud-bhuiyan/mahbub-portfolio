import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = ["Developer.", "Professional Coder.", "UI/UX Designer."];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="mt-6 bg-green-500">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/3">
            <div>
              <h3 className="text-xs">WELCOME TO MY WORLD</h3>
              <h1 className="text-3xl font-bold">
                Hi, I’m <span className="text-orange-500">Mahbub</span>
              </h1>
              <h3>
                a <span>{texts[currentTextIndex]}</span>
              </h3>
            </div>
            <div className="mt-4">
              <h5 className="uppercase">Find with me</h5>
              <div className="flex gap-4 mt-3">
                <Link to="/" className="btn shadow-lg">
                  <FaLinkedinIn></FaLinkedinIn>
                </Link>
                <Link to="/" className="btn shadow-lg">
                  <FaFacebookF></FaFacebookF>
                </Link>
                <Link to="/" className="btn shadow-lg">
                  <FaYoutube></FaYoutube>
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3">
            <img src="/banner-01.png" alt="" className="w-full h-auto" />
          </div>
        </div>
      </div>
      <hr className="my-10" />
    </>
  );
};

export default Banner;
