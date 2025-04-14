import React from "react";
import { NavLink } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

const UserProfie = () => {
  return (
    <>
    <Header/>
    <div className="mt-18 w-full h-100 bg-violet-300 flex items-center justify-between ">
      <div className="w-330 h-100 mx-25 mt-30 bg-white flex place-content-between ">
        <div className="flex ml-20 space-x-8 ">
          <div className="flex flex-col mt-5" >
            <p className="font-bold text-gray-800" >85</p>
            <p className="text-gray-500" >Post</p>
          </div>
          <div  className="flex flex-col mt-5" >
            <p  className="font-bold text-gray-800">100k</p>
            <p className="text-gray-500">Likes</p>
          </div>
          <div  className="flex flex-col mt-5">
            <p  className="font-bold text-gray-800">55k</p>
            <p className="text-gray-500">Comments</p>
          </div>
        </div>
        <div className="mt-5 object-contain" >
          <img className="w-45 h-50  rounded-full " src="newuse.png" />
         <div className="flex flex-col items-center justify-center" >
         <h1 className="text-gray-800 font-semibold text-3xl mt-3" >Jessica Jonses , 26</h1>
         <h3 className="text-gray-500 mt-2 text-xl" >Sydney , Australia</h3>
         <h3 className="text-gray-800 mt-3" >Marketing Head - Creative Tim Office</h3>
         <h3 className="text-gray-800" >University of Sydney</h3>
         </div>
        </div>
        <div className="mr-20 mt-5" >
          <NavLink to="/explore" >
            <button className="w-30 h-10 bg-purple-800 text-white" >Explore Memes</button>
            <button className="w-30 h-10 bg-blue-800 text-white ml-2 " >Connect</button>
          </NavLink>
        </div>
        
      </div>
     
    </div>
    <Footer className="mb-5" />
    </>
  );
};

export default UserProfie;
