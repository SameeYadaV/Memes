import React from "react";
import { navigatior } from "../Constant/Navigation";
import { NavLink } from "react-router";
import { FaTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { Catagories } from ".";

const Footer = () => {
  return (
    <div className="w-full mt-10 mb-10 p-10 flex h-45 ">
      <div className=" mr-auto w-105 ml-3 mt-3 h-full content-center ">
        <p className="text-3xl font-semibold ">
          Meme <span className="text-purple-800">Versa</span>
        </p>
        <p className=" mt-5 text-gray-500">
          The ultimate platform for meme lovers to discover, create, and share
          the internet's funniest content.
        </p>
      </div>
      <div className="ml-auto w-105   h-full content-center grid grid-cols-3 gap-3 ">
      
      <div>
          <h1 className="uppercase font-semibold mb-5" >Navigation</h1>
        <ul>
        {
         navigatior.map(nav=>
       <NavLink className="mt-2 text-gray-500 flex flex-col hover:text-purple-800 " to={nav.href} >{nav.label}</NavLink>
         )
         }
        </ul>
        </div>
        <div>
          <h1 className="uppercase font-semibold mb-5" >catagories</h1>
          {
            Catagories.map(item=>
              <NavLink to={item.href} className="mt-2 text-gray-500 flex flex-col hover:text-purple-800 " key={item.href} >{item.lable}</NavLink>
            )
          }
        </div>
        <div>
          <h1 className="uppercase mb-5 font-semibold" >Connect</h1>
          <div className="flex gap-3 text-3xl" >
            <FaTwitter/>
            <IoLogoInstagram/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
