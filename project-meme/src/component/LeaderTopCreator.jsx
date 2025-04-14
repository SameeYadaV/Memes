import React, { useState } from 'react'

export const LeaderTopCreator = () => {
 
  return (
    <div className='mx-35 flex flex-col items-center mt-10 ' >
        <div className='h-20 w-200 bg-indigo-300 rounded-2xl border-r-8 border-b-8 border-black ' >
            <p className='text-white mt-3 text-xl ' >Top Meme Creators</p>
            <p className='text-white' >Rankings based on likes, meme count, and overall engagement</p>
        </div>
        <div className='h-20 w-200 rounded-2xl flex bg-violet-200 mt-5 text-black item center ' >
            <div className='w-1/2 flex flex-col ' >
            <p className='mt-3' >Anonymous</p>
            <p>100 memes 
                <span className='ml-1' >0 likes</span>
            </p>
            </div>
            <div className='w-1/2 mt-3'>
            <p>100 pts</p></div>
        </div>
    </div>
  )
}
