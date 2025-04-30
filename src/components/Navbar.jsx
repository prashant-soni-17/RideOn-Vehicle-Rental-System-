import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className= 'flex justify-between items-center p-4'>
      <img className="w-40 h-12 object-cover" src={logo} alt="logo" />

      <div className="flex gap-2 m-5">
        <Link to="/">Home</Link>
        <Link to="/Login">Login</Link>
        <Link to="/SignUp">SignUp</Link>
        <Link to="/BookNow">Book Now</Link>
      </div>
    </nav>
  );
};

export default Navbar;
