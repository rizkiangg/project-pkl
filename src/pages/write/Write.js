import React from "react";
import { AiFillFileAdd } from "react-icons/ai";
import TopBar from "../../components/top_bar/TopBar";

const Write = () => {
  return (
    <div> 
      <TopBar/>
      <div>
        <img
          src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?cs=srgb&dl=pexels-jaime-reimer-2662116.jpg&fm=jpg"
          alt=""
          className="ml-[150px] w-[70vw] h-[250px] object-cover rounded-lg"
        />
        <form>
          <div className="flex pl-[150px] w-[70vh] py-5 ">
            <label htmlFor="fileInput">
              <AiFillFileAdd className="text-slate-800 w-[25px] h-[25px] border-[1px] align-middle " />
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
            <input
              type="text"
              className="pl-1"
              placeholder=" Title"
              autoFocus={true}
            />
          </div>
          <div className="pl-[150px]">
            <textarea
              placeholder="Tell your story..."
              type="text"
              className="w-[70vh] pl-2"
            ></textarea>
          </div>
          <div className="absolute right-[50px] top-[430px]">
            <button className="border-[1px] py-1 px-2 border-slate-900 rounded-md bg-slate-700 text-white">
              Publish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Write;
