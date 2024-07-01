import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../public/assets/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="font-poppins font-medium bg-white fixed w-full top-0 z-20">
      <div className="flex flex-wrap items-center gap-6 md:gap-0 md:justify-evenly mx-auto p-4">
        <img src={logo} alt="Logo" />

        <div className="flex items-center md:order-2 space-x-3 md:space-x-0">
          <button className="bg-purple-blue w-40 h-11 rounded-3xl text-base text-white font-medium hover:bg-[#3639AE]">
            <Link to="/tracker">Tracker</Link>
          </button>

          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center border text-gray border-gray-super-light rounded md:hidden focus:outline-none"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className={`items-center justify-between ${isOpen ? "flex" : "hidden"} w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul
            className={`flex flex-col p-4 text-[#515184] md:p-0 font-medium bg-gray-50 md:space-x-9 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ${
              isOpen ? "absolute top-16 left-0 w-full bg-white" : ""
            }`}
          >
            <li>
              <Link to="/" className="flex border-b-2 border-[#515184] md:border-0 py-3 pl-3 pr-4 text-gray-700 md:p-0">
                Home
                <svg width="20px" height="auto" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#515184">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <rect x="0" fill="none" width="24" height="24"></rect>{" "}
                    <g>
                      {" "}
                      <path d="M7 10l5 5 5-5"></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </Link>
            </li>
            <li>
              <Link to="/" className="flex border-b-2 border-[#515184] md:border-0 py-3 pl-3 pr-4 text-gray-700 md:p-0">
                Prevention
              </Link>
            </li>
            <li>
              <Link to="/" className="flex border-b-2 border-[#515184] md:border-0 py-3 pl-3 pr-4 text-gray-700 md:p-0">
                Quarantine
              </Link>
            </li>
            <li>
              <Link to="/" className="flex border-b-2 border-[#515184] md:border-0 py-3 pl-3 pr-4 text-gray-700 md:p-0">
                Pages
                <svg width="20px" height="auto" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#515184">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <rect x="0" fill="none" width="24" height="24"></rect>{" "}
                    <g>
                      {" "}
                      <path d="M7 10l5 5 5-5"></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </Link>
            </li>
            <li>
              <Link to="/" className="flex border-b-2 border-[#515184] md:border-0 py-3 pl-3 pr-4 text-gray-700 md:p-0">
                About
              </Link>
            </li>
            <li>
              <Link to="/" className="flex border-b-2 border-[#515184] md:border-0 py-3 pl-3 pr-4 text-gray-700 md:p-0">
                Help
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
