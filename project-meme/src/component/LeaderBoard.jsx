import React, { useState } from "react";
import { NavLink } from "react-router";
import LeaderBoardList from "./LeaderBoardList";
import {LeaderTopCreator} from "./LeaderTopCreator";

const LeaderBoard = () => {
  const [data,setData]=useState(true);
  const [user,setUser]=useState(false);

  function handelData(){
    setUser(!user);
    setData(!data)
  }
  
  function handeUser(){
    
    setData(!data);
    setUser(!user)
  }
  return (
    <div className="mt-23 text-center">
      <h1 className="font-bold text-3xl mt-3">Meme Leaderboard</h1>
      <p className="mt-3">Discover the most popular memes and top creators</p>
     
      <div class="bg-gray-200 p-1 rounded-lg inline-flex mt-5 ">
        <button className={`px-6 py-2 rounded-md font-medium text-sm transition-all  ${data ?"bg-white":"bg-gray-200"} shadow text-purple-800`} onClick={handelData} >
          Top Memes
        </button>
        <button className={`px-6 py-2 rounded-md font-medium text-sm transition-all ${user ?"bg-white":"bg-gray-200"} text-gray-600 hover:text-gray-900`} onClick={handeUser}>
          Top Creators
        </button>
      </div>
      {data &&<LeaderBoardList/>}
      {user && <LeaderTopCreator/>}
    </div>
  );
};

export default LeaderBoard;

// ({isActive})=>
