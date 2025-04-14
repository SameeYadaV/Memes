import React from 'react'
import { HiMiniPhoto } from "react-icons/hi2";
import Header from './Header';
import Footer from './Footer';
const CreatePage = () => {
  return (
    <>
    <Header/>
    <div className='w-full h-170 bg-gray-100  flex justify-center  mt-16' >
      <div className='h-120 w-300 p- bg-white mt-10 rounded-2xl  flex  items-center justify-center' >
        <div className='border border-dashed border-gray-400 flex justify-center items-center w-280 h-100 flex-col' >
          <p className='text-9xl' ><HiMiniPhoto/></p>
          <h1 className='text-3xl mt-5 font-bold' >Drag & Drop Image</h1>
          <p className='mt-5 text-xl' >Upload an image or GIF to start creating your meme. We recommend using high-quality images for the best results.</p>
          <button className='mt-5 boder bg-purple-800 text-white w-30 h-12 rounded-2xl hover:bg-purple-400 hover:cursor-pointer' >Choose Photo</button>
          
        </div>

      </div>
    </div>
    <Footer/>
    </>
  )
}

export default CreatePage