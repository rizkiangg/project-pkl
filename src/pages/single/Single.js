import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Single_post from "../../components/singe_post/Single_post";
import TopBar from "../../components/top_bar/TopBar";

const Single = () => {
  return (
    <div><TopBar/>
      <div className="flex">
        <Single_post /> <Sidebar />
      </div>
    </div>
  );
};

export default Single;
