import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaTwitter,
  FaPinterestSquare,
  FaInstagramSquare,
  FaSearch,
} from "react-icons/fa";

const TopBar = () => {
  const user = false;
  return (
    <div className="static pb-28">
      <div className="bg-slate-800 py-7 flex fixed w-full z-50">
        <div className="text-white pl-5 text-2xl w-1/4 flex gap-4">
          <FaFacebookSquare /> <FaTwitter /> <FaPinterestSquare />
          <FaInstagramSquare />
        </div>
        <div className="w-2/4 justify-center text-white font-thin text-lg">
          <ul className="flex gap-4 justify-center">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
            <li>
              <Link to="/write">Write</Link>
            </li>
            <li>{user && "LOGOUT"}</li>
          </ul>
        </div>
        <div className="w-1/3 flex justify-end pr-5 gap-1  text-white">
          {user ? (
            <img
              src="https://images.pexels.com/photos/9282148/pexels-photo-9282148.jpeg?cs=srgb&dl=pexels-christian-buergi-9282148.jpg&fm=jpg"
              alt=""
              className="border-[50%] bg-cover w-[40px] h-[40px] rounded-full mx-9"
            />
          ) : (
            <div className="flex gap-3 pr-3">
              <Link to="/login">LOGIN</Link>
              <Link to="/register">REGISTER</Link>
            </div>
          )}

          <FaSearch className="text-lg my-2" />
          <input type="text" className="my-2 h-5 text-black rounded-sm" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
