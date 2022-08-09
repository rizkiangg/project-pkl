import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import { FaUserAlt } from "react-icons/fa";
import TopBar from "../../components/top_bar/TopBar";

const Settings = () => {
  return (
    <div>
      <TopBar/>
      <div className="flex p-[20px] text-slate-700">
        <div className="w-4/5">
          <div className="flex justify-between">
            <span className=" text-[30px] text-slate-700">
              Update your account
            </span>
            <span>Delete your account</span>
          </div>
          <form className="py-5">
            <label className="text-slate-700">Profile picture</label>
            <div className="flex flex-col pt-2">
              <div className="flex">
                <img
                  className="w-[70px] h-[70px] rounded-xl object-cover"
                  src="https://images.pexels.com/photos/9282148/pexels-photo-9282148.jpeg?cs=srgb&dl=pexels-christian-buergi-9282148.jpg&fm=jpg"
                  alt=""
                />
                <label htmlFor="fileInput" className="">
                  <FaUserAlt className="border-2 p-[1px] ml-2 my-5 cursor-pointer text-white bg-slate-800 rounded-full w-[25px] h-[25px]" />
                </label>
              </div>

              <input
                type="file"
                id="fileInput"
                className="m-[10px] h-[30px] border-b-[1px]"
                style={{ display: "none" }}
              />
              <label className="text-[20px] mt-[20px]">Username</label>
              <input
                type="text"
                className="m-[10px] h-[30px] border-b-[1px]"
                placeholder=" Mantep"
              />
              <label className="text-[20px] mt-[20px]">Email</label>
              <input
                type="email"
                className="m-[10px] h-[30px] border-b-[1px]"
                placeholder=" Mantep@gmail.com"
              />
              <label className="text-[20px] mt-[20px]">Password</label>
              <input
                type="password"
                className="m-[10px] h-[30px] border-b-[1px]"
              />
              <button className="w-[150px] self-center mt-5 py-1 bg-slate-700 rounded text-white">
                Update
              </button>
            </div>
          </form>
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default Settings;
