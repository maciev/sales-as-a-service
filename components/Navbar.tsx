import React, { ReactElement, useState } from "react";

interface Props {
  transparent?: boolean;
}

function Navbar(props: Props): ReactElement {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav
      className={
        (props.transparent
          ? "top-0 absolute z-50 w-full"
          : "relative bg-white shadow-lg") +
        " flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg"
      }
    >
      <div className="container px-24 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-24 relative flex justify-between  lg:static lg:block lg:justify-start">
          <img
            className={
              (props.transparent ? "w-24" : "w-24") +
              "leading-relaxed inline-block mr-4 py-2"
            }
            src="https://www.growth-hackers.net/wp-content/uploads/2020/04/Knarr-Data-Analytics-SaaS-Logo-Transparent.png"
          ></img>
          <button
            className="cursor-pointer text-xl bleading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i
              className={
                (props.transparent ? "text-black" : "text-gray-800") +
                " fas fa-bars"
              }
            ></i>
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
            (navbarOpen ? " block rounded shadow-lg" : " hidden")
          }
          id="example-navbar-warning"
        >
          <ul className="flex flex-col lg:flex-row list-none mr-auto">
            <li className="flex items-center">
              <a
                className={
                  (props.transparent
                    ? "lg:text-black lg:hover:text-gray-300 text-blue-500"
                    : "text-gray-800 hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
                href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/landing"
              >
                <i
                  className={
                    (props.transparent
                      ? "lg:text-gray-300 "
                      : "text-gray-500") +
                    " far fa-file-alt text-lg leading-lg mr-2"
                  }
                />{" "}
                Docs
              </a>
            </li>
          </ul>
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="flex items-center">
              <button
                className={
                  (props.transparent
                    ? "bg-blue-100 text-blue-500 active:bg-gray-100"
                    : "bg-pink-500 text-black active:bg-pink-600") +
                  " text-xs text-white font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                }
                type="button"
                style={{ transition: "all .15s ease" }}
              >
                <i className="fas fa-arrow-alt-circle-down"></i> Contact us
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
