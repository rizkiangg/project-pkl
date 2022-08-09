import React from "react";
import { FaEdit } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";
const Single_post = () => {
  return (
    <div className="pl-14 py-4 text-center">
      <span className="text-3xl font-semibold">Post</span>
      <div className="overflow-auto h-1/4 py-4">
        <img
          src="https://images.pexels.com/photos/1477430/pexels-photo-1477430.jpeg?cs=srgb&dl=pexels-warren-blake-1477430.jpg&fm=jpg"
          alt=""
          className="rounded-md"
        />
      </div>
      <div className="flex py-5 float-right">
        <FaEdit className="cursor-pointer" />
        <AiTwotoneDelete className="cursor-pointer" />
      </div>
      <h1 className="py-10 text-2xl font-bold ">Lorem ipsum dolor sit amet</h1>

      <div className="text-left flex justify-between">
        <span>
          Author :<b className="pr-3"> Widodo</b>
        </span>
        <span>1 hour ago</span>
      </div>
      <p className="text-left pt-4 first-letter:text-lg first-letter:pl-10">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit atque rem
        maxime tempore. Quae praesentium culpa doloribus tempore nemo ipsum
        error veniam, quo dignissimos temporibus expedita minima labore
        consectetur laudantium. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Sit atque rem maxime tempore. Quae praesentium culpa
        doloribus tempore nemo ipsum error veniam, quo dignissimos temporibus
        expedita minima labore consectetur laudantium. Lorem ipsum dolor sit
        amet consectetur, adipisicing elit. Sit atque rem maxime tempore. Quae
        praesentium culpa doloribus tempore nemo ipsum error veniam, quo
        dignissimos temporibus expedita minima labore consectetur laudantium.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit atque rem
        maxime tempore. Quae praesentium culpa doloribus tempore nemo ipsum
        error veniam, quo dignissimos temporibus expedita minima labore
        consectetur laudantium.
      </p>
    </div>
  );
};

export default Single_post;
