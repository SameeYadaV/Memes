import React from 'react'
import { FaRegHeart } from "react-icons/fa";
export const LeaderBoardCard = ({d}) => {
    const no=Math.random() * 2000;
    const number=Math.floor(no);
  return (
    <div className='w-85 h-85 overflow-hidden m-5 border-gray-100 shadow-2xl rounded-2xl ' >
        <img className='w-85 h-70' src={d.preview[2]} />
        <p className='mt-5 ml-5 flex items-center justify-center ' >
           <span className='text-xl' > <FaRegHeart /></span>
           <p className='ml-1' >{number}</p>
        </p>
    </div>
  )
}

