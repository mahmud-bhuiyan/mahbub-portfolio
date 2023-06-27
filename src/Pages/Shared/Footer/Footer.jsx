import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer footer-center p-10  text-base-content rounded">
        <div className="grid grid-flow-col gap-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <Link to="/" className="btn drop-shadow-xl bg-[#ECF0F3]">
              <FaLinkedinIn className="text-lg"></FaLinkedinIn>
            </Link>
            <Link to="/" className="btn mx-3 drop-shadow-xl bg-[#ECF0F3]">
              <FaFacebookF className="text-lg"></FaFacebookF>
            </Link>
            <Link to="/" className="btn drop-shadow-xl bg-[#ECF0F3]">
              <FaYoutube className="text-lg"></FaYoutube>
            </Link>
          </div>
        </div>
      </footer>
      <footer className="footer items-center py-4 px-10 bg-[#ECF0F3] text-base-content drop-shadow-2xl">
        <div className="items-center grid-flow-col">
          <p>© {currentYear} - All rights reserved</p>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <Link to="https://github.com/mahmud-bhuiyan" target="_blank">
            Designed & Developed By:{" "}
            <span className="text-orange-500 font-bold uppercase">Mahmud</span>
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
