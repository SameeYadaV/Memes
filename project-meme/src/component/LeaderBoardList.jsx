import React, { useEffect, useState } from 'react'
import {LeaderBoardCard} from './LeaderBoardCard';
import Header from './Header';
import Footer from './Footer';

const LeaderBoardList = () => {
    const [data,setdata]=useState([]);
     async function fetchdata(){
        const data= await fetch("https://meme-api.com/gimme/wholesomememes/9")
        const wait= await data.json();
        setdata(wait.memes)
       
    }
    console.log(data)
    useEffect(()=>{
        fetchdata();
    },[])
  return (
   <>
   <Header/>
    <div className='flex flex-wrap justify-between mt-15 mx-35 ' >
        {
            data.map((item=>
                <LeaderBoardCard d={item} key={item.ups} />
            ))
        }
    </div>
    <Footer/>
   </>
  )
}

export default LeaderBoardList