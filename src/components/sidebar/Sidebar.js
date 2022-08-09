import React from "react";
import {
  FaFacebookSquare,
  FaTwitter,
  FaPinterestSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import TopBar from "../top_bar/TopBar";

const Sidebar = () => {
  return (
    <div className=" pt-10 pr-10 text-center w-1/5 text-slate-700">
      <span className=" border-y-2 w-full py-1 px-16 border-slate-400">
        ABOUT ME
      </span>
      <img
        className="rounded-lg mt-5"
        src="https://images.pexels.com/photos/9282148/pexels-photo-9282148.jpeg?cs=srgb&dl=pexels-christian-buergi-9282148.jpg&fm=jpg"
        alt=""
      />
      <p className="text-center pt-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <div className="py-6">
        <span className="border-y-2 w-full px-16 py-1 border-slate-400">
          Categories
        </span>
        <ul className="grid grid-cols-2 gap-2 pt-4 text-left ml-10">
          <li>abcdef</li>
          <li>ghijk</li>
          <li>lmnop</li>
          <li>kontol</li>
          <li>kjadhajh</li>
          <li>akdaysh</li>
        </ul>
      </div>
      <hr />
      <span>Follow us</span>
      <ul className="flex gap-7 text-4xl justify-center py-5">
        <li>
          <FaFacebookSquare />
        </li>
        <li>
          <FaTwitter />
        </li>
        <li>
          <FaPinterestSquare />
        </li>
        <li>
          <FaInstagramSquare />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
