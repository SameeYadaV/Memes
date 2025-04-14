import { useGSAP } from "@gsap/react";
import React, { useRef, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { GoStopwatch } from "react-icons/go";
import gsap from "gsap";

const Card = ({ d }) => {
  const no = Math.random() * 200;
  const number = Math.floor(no);
  const nocomment = Math.random() * 10;
  const numberComment = Math.floor(no);
  const refCard=useRef();
  const refCards=useRef();

  useGSAP(()=>{
    gsap.from(refCard.current,{
     y:150,
     duration:1,
     stagger:-15
    })
  });

 function handelDetails(e){
  console.log(e.height)
 }

  return (
    <div className="border-gray-200 border w-85 rounded-2xl shadow-2xl m-5 h-85 overflow-hidden  " ref={refCard} onClick={handelDetails} >
      <img
        className="w-85 h-60  bg-center rounded-t-2xl hover:transition-transform duration-300 transform hover:scale-105   "
        src={d.url}
      />
      <p className="font-bold mt-2 ml-2  hover:text-purple-800 ">{d.name}</p>
      <div className="flex mt-3 ">
        <div className="flex  items-center justify-center ml-2">
        < FaRegHeart  className="mr-1" />
          <span>{d.height}</span>
        </div>
        <div className="flex items-center justify-center m-auto ">
          <FaRegComment className="mr-1" />
          <span>{numberComment}</span>
        </div>
        <div className="flex  items-center justify-center ml-auto mr-2 ">
          <GoStopwatch className="mr-1"  />
          <span>{number}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
