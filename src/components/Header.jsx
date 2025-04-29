import React from "react";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router";

const Header = () => {
  return (
    <header className="z-10 w-full border-b-1 border-white/10">
      <nav>
        <div className="container">
          <div className="navWrapper flex justify-between py-5 lg:py-12">
            <div className="logo">
              <img src="images/logo.png" alt="logo" />
            </div>

            <FaBars className="text-xl text-white lg:hidden" />

            <ul className="hidden gap-12 lg:flex">
              <li>
                <Link className="list" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="list" to="/about">
                  About Me
                </Link>
              </li>
              <li>
                <a className="list" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
