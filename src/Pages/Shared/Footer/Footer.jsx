import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <div className="grid grid-flow-col gap-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <a>
              <FaFacebookF></FaFacebookF>
            </a>
            <a>
              <FaYoutube></FaYoutube>
            </a>
            <a>
              <FaLinkedinIn></FaLinkedinIn>
            </a>
          </div>
        </div>
      </footer>
      <footer className="footer items-center p-4 bg-base-300 text-base-content border-base-300">
        <div className="items-center grid-flow-col">
          <p>© {currentYear} - All rights reserved</p>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <p>Designed & Developed By: Mahmud</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
