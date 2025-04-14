import React, { useRef, useState } from "react";
import { href, Link, NavLink } from "react-router";
import { navigatior } from "../Constant/Navigation";
import { FaMoon } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { BsSave2 } from "react-icons/bs";
import { HiLogout } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Header = () => {
  const [drop, setdrop] = useState(false);
  const refName = useRef();
  const menu = [
    {
      name: "Profile",
      icons: <FaRegUser />,
    },
    {
      name: "Saved Memes",
      icons: <BsSave2 />,
    },
    {
      name: "Settings",
      icons: <IoSettingsOutline />,
    },
    {
      name: "Log Out",
      icons: <HiLogout />,
    },
  ];
  useGSAP(() => {
    gsap.from(".box", {
      y: -360,
      opacity: 0,
      scale: 3,
      duration: 1,
      ease: true,
    });
  }, [refName]);
  return (
    <div className=" flex w-full  mb-3 h-18 border-b-2 border-purple-800 items-center px-5 fixed top-0 z-40 bg-white">
      <Link to="/main" className="ml-8 flex text-3xl mr-auto box  ">
        Meme <p className="text-purple-800">Versa</p>
      </Link>
      {navigatior.map((nav, idx) => {
        return (
          <div className="max-lg:hidden">
            <nav className="flex items-center justify-center m-3  text-gray-500 hover:text-purple-800 ">
              <NavLink
                to={nav.href}
                key={idx}
                className={({ isActive }) =>
                  `box m-1  ${isActive && "text-purple-800"}`
                }
              >
                {nav.icon}
              </NavLink>
              <NavLink
              key={nav.label}
                to={nav.href}
                className={({ isActive }) =>
                  ` box ${isActive && "text-purple-800"}`
                }
              >
                {nav.label}
              </NavLink>
            </nav>
          </div>
        );
      })}
      <div className="flex items-center ml-auto mr-3">
        <div className="mr-4 box max-lg:hidden">
          <FaMoon />
        </div>
        <img
          src="newuse.png"
          className="w-5 h-5 rounded-full box "
          alt="user"
          onClick={() => setdrop(!drop)}
        />
        <div className="cursor-pointer">
          {drop && (
            <ul className="absolute top-18 right-10 shadow">
              {menu.map((v, idx) => (
                <li
                  key={idx}
                  className="bg-white hover:bg-gray-300 text flex w-40 items-center h-10 border-b border-gray-100 pl-2 font-normal "
                >
                  <p className="mr-2">{v.icons}</p>
                  {v.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
