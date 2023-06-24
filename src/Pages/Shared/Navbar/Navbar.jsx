import { Link } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/contact" className="shadow-lg">
          Contact Me
        </Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-[#ECF0F3] flex justify-between items-center fixed z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-white rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Mahbub
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navLinks}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
