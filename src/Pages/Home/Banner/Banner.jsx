import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa6";

const Banner = () => {
  return (
    <div>
      <div>
        <div>
          <h3>WELCOME TO MY WORLD</h3>
          <h1>
            Hi, I’m <span>Mahbub</span>
          </h1>
          <div>
            <h5 className="uppercase">Find with me</h5>
            <div className="flex gap-4">
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
        </div>
        <div>
          <img src="/public/banner-01.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
