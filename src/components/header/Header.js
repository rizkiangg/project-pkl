import React from "react";

const Header = () => {
  return (
    <div className="flex justify-center  mb-56 text-red-900 relative h-full top-">
      <span className="absolute text-[20px]  text-center">React & Node</span>
      <span className="absolute text-[100px] text-center">Blog</span>
      <div className="mt-[80px] ">
        <img
          src="https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?cs=srgb&dl=pexels-ian-turnell-709552.jpg&fm=jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
