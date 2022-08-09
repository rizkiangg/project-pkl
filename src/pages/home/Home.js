import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Post from "../../components/post/Post";
import Sidebar from "../../components/sidebar/Sidebar";
import TopBar from "../../components/top_bar/TopBar";
const Home = () => {
  const [post,setPost] = useState([]);

  useEffect(()=>{
    const fetchPosts = async ()=>{
      axios.get("")
    }
  },[])
  return (
    <div>
<TopBar/>
<Header />
<div className="flex">
      <Post />

      <Sidebar /></div>
      
    </div>
  );
};

export default Home;
