import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-xl mb-10 bg-gradient-to-r from-emerald-300 via-green-300 via-20% ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
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
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>News</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
      </div>

      <Link href="/">
        <div className="navbar-center btn btn-ghost normal-case text-xl">
          myNews
        </div>
      </Link>
      <div className="navbar-end gap-5">
        <Link href="login">
          <button type="button" className="btn btn-active bg-green-200">
            Log in
          </button>
        </Link>
        <Link href="register">
          <button type="button" className="btn btn-active bg-green-200">
            Sign up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
