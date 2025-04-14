import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import { FaMedal } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import React from "react";
export const navigatior=[
    {
        icon:<FaHome/>,
        label:"Home",
        href:"/home"
    },
    {
        icon:<FaSearch/>,
        label:"Explore",
        href:"/explore"
    },
    {
        icon:<FiUpload/>,
        label:"Upload",
        href:"/upload"
    },
    {
        icon:<FaMedal/>,
        label:"Leaderboard",
        href:"/leaderboard"
    },
    {
        icon:<IoPersonSharp/>,
        label:"Profile",
        href:"/profile"
    }
]