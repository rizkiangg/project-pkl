import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="bg-cover  bg-[url('https://images.pexels.com/photos/636243/pexels-photo-636243.jpeg?cs=srgb&dl=pexels-bich-tran-636243.jpg&fm=jpg')] h-[120vh] ">
      <div className="flex flex-col justify-center items-center center ">
        <div className="my-[100px] grid backdrop-blur bg-white/25 p-10 px-20 rounded-md border-2 border-slate-700/25">
          <span className="text-[50px] text-center text-black my-3">
            Register
          </span>
          <form className="my-10 grid">
            <label className="pl-1 py-2 text-slate-900 font-semibold">
              Username
            </label>

            <input type="text" className="pl-2 bg-white/25 h-8 rounded-md" />
            <label className="pl-1 py-2 text-slate-900 font-semibold">
              Date of birth
            </label>
            <input type="date" className="pl-2 bg-white/25 rounded-md h-8" />
            <label className="pl-1 py-2 text-slate-900 font-semibold">
              Email
            </label>
            <input
              type="email"
              placeholder="Insert email"
              className="pl-2 bg-white/25 h-8 rounded-md"
            />
            <label className="pl-1 py-2 text-slate-900 font-semibold">
              Password
            </label>
            <input
              type="password"
              className="pl-1 bg-white/25 h-8 rounded-md"
            />
            <Link
              className="button border-2 text-center bg-white/60 rounded-md hover:bg-slate-700 py-1 hover:text-white duration-75 my-3"
              to="/login"
            >
              Login
            </Link>
          </form>
          <button className="border-2 bg-white/60 rounded-md hover:bg-slate-700 py-1 hover:text-white duration-75">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
