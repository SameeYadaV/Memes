import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { href, NavLink, Outlet } from "react-router";
import { BsEmojiSmileFill } from "react-icons/bs";
import { GiAnimalSkull } from "react-icons/gi";
import { BiJoystick } from "react-icons/bi";
import { PiFilmSlateBold } from "react-icons/pi";
import { FaTrophy } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import Footer from "./Footer";
import Header from "./Header";
export const Catagories = [
  {
    icon: <BsEmojiSmileFill />,
    lable: "Reaction",
    href: "/explore",
  },
  {
    icon: <GiAnimalSkull />,
    lable: "Animals",
    href: "/explore",
  },
  {
    icon: <BiJoystick />,
    lable: "Gaming",
    href: "/explore",
  },
  {
    icon: <PiFilmSlateBold />,
    lable: "Movies",
    href: "/explore",
  },
  {
    icon: <FaTrophy />,
    lable: "Classic",
    href: "/explore",
  },
  {
    icon: <BsStars />,
    lable: "Anime",
    href: "/explore",
  },
];
const Index = () => {
  const refhero = useRef();
  const refimage = useRef();
  useGSAP(() => {
    gsap.from(refimage.current, {
      scale: 2,
      ease: true,
      duration: 1,
    });
  });
  useGSAP(() => {
    gsap.from(refhero.current, {
      y: 100,
      opacity: 0,
      ease: true,
      duration: 3,
    });
  });

 
  return (
    <>
    <Header/>
      <div className="">
        <div className=" mt-23 flex xl:flex-row flex-col  bg-gray-100 w-full h-full max-md:mt-10  max-md:items-center max-md:p-5 ">
          <div
            className="mr-auto w-1/2 content-center h-160 max-md:w-full  max-md:content-start"
            ref={refhero}
          >
            <div>
              <h1 className="text-6xl  font-semibold ml-3 max-md:text-3xl max-md:h-50 ">
                Discover the <span className="text-purple-800">Funniest </span>
                Memes Online
              </h1>
              <p className="text-xl m-3 max-md:text-xl max-md:m-3 ">
                Browse thousands of viral memes, create your own, and share with
                friends. Join the fastest growing meme community on the web.
              </p>
              <div className="items-center">
                <NavLink to="/explore" className="items-center">
                  <button className="bg-purple-800  text-white whitespace-nowrap xl:w-33 h-12 rounded-lg ml-15 mt-10 hover:bg-purple-500">
                    Start Exploring
                  </button>
                </NavLink>
                <NavLink to="/upload">
                  <button className="bg-gray-800 text-white whitespace-nowrap xl:w-33 p-2 h-12 rounded-lg ml-15 mt-10 hover:bg-black-500">
                    Create a Meme
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="ml-auto w-1/2 mt-12 rounded-lg shadow-2xl">
            <img
              ref={refimage}
              src="hero.png.jpg "
              className="shadow-2xl w-full h-full object-cover rounded-lg  "
            />
          </div>
        </div>
        <div className="h-60 w-full   ">
          <h1 className="text-center mt-5 text-4xl font-semibold">
            Popular Categories
          </h1>
          <p className="mt-3 text-center">
            Find exactly what you're looking for with our curated meme
            categories
          </p>
          <div className="flex gap-3 place-content-between ">
            {Catagories.map((item) => {
              return (
                <NavLink
                  to={item.href}
                  className="w-50 rounded-2xl h-32 bg-gray-100  flex flex-col items-center justify-center m-5  hover:transition-transform duration-300 transform hover:scale-110 "
                >
                  <p className="text-3xl" >{item.icon}</p>
                  <p className="text-xl m-2 hover:text-purple-800 ">{item.lable}</p>
                </NavLink>
              );
            })}
          </div>
         
        </div>

      </div>
      <div className="h-120 border-2 w-full bg-pink-800  flex items-center justify-center" >
        <div className="h-80 w-220 bg-white rounded-2xl flex items-center justify-center flex-col border-2 border-black border-r-8 border-b-8 " >
          <h1 className="font-semibold text-4xl " >MEMES. LOTS OF 'EM!</h1>
          <p className="mt-5 text-2xl " >Why so serious? Join the fun with thousands of fellow memers!</p>
          <NavLink to="/explore" className="mt-5" ><button className="uppercase bg-purple-400 h-12 w-50 rounded-2xl font-bold border-r-8 border-b-8 border-2 " >Show me the memes</button></NavLink>
          <p className="mt-5 rounded-2xl bg-gray-200 w-60 h-8   flex items-center justify-center" >69,420
          memes and counting!</p>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Index;
