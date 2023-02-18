import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
        <a className="navbar-brand" href="#">
          YSJ Burgers and Tacos
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Menu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Check Out
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
// import logo from "../images/images.png"
// import { Link } from "react-router-dom"

// export const Header = () => {
//     return (
//         <nav id="header" classNameNameName="bg-yellow text-white">
//             <div classNameNameName="w-full-container mx-auto flex flex-wrap items-center justify-between mt-0 py-2 ">
//                 <div classNameNameName="logo-wrapper pl-4 flex items-center">
//                 <Link to="/" classNameNameName="toggleColor text-black hover: bg-black no-underline"></Link>
//                 <img src={'./images/image.png'} alt="logo"/>
//             </div>
//             <div classNameNameName="nav-menu flex iteams-center justify-between space-x-10">
//                 <Link classNameNameName="text-xl">Home</Link>
//                 <Link classNameNameName="text-xl">About</Link>
//                 <Link classNameNameName="text-xl">Menu</Link>
//                 <Link classNameNameName="text-xl">Order</Link>
//                 <Link classNameNameName="text-xl">Cart</Link>
//                 </div>
//             </div>
//         </nav>
//     )
// }
