import React, { useState } from "react";
import { navigatior } from "../Constant/Navigation";
import { Link, NavLink } from "react-router";
import { AiOutlineBars } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const MobileNavigation = () => {
  const [navs, setnavs] = useState(false);
  function handelbar() {
    setnavs(!navs);
  }
  return (
    <div className="lg:hidden">
      <p onClick={handelbar} className="mt-24 ml-4 text-xl ">
        <AiOutlineBars />
      </p>
      {navs && (
        <div className="absolute top-22 h-full w-80 bg-white  border-2 border-gray-300 shadow-2xl  z-50 ">
          <RxCross2
            className="ml-auto mr-2 mt-2 text-2xl "
            onClick={handelbar}
          />
          {navigatior.map((nav, idx) => {
            return (
              <div>
                <NavLink
                  to={nav.href}
                  key={nav.label}
                  className={(isActive) =>
                    ` text-xl  ${isActive && "text-purple-800"}`
                  }
                >
                  <p className="flex ml-3 gap-4 items-center mt-2">
                    {nav.icon}
                    {nav.label}
                  </p>
                </NavLink>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MobileNavigation;
