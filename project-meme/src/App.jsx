import React, { useEffect } from 'react'
import { Outlet } from 'react-router'
import Header from './component/Header'
import MobileNavigation from './component/MobileNavigation'
import Index from './component'
import Footer from './component/Footer'
import {useDispatch} from 'react-redux'
import { dataAction } from './Store/DataSlice'

const App = () => {
  const dispatch=useDispatch();
  
  const fetchdata= async()=>{
    const fetching= await fetch("https://api.imgflip.com/get_memes");
    const data= await fetching.json();
   dispatch(dataAction.addData(data.data.memes));
  //  console.log(data.data.memes)
  }
  useEffect(()=>{
    fetchdata()
  },[])
  return (
    <div className="" >
    
      <MobileNavigation/>
    <Index/>
    
    </div>

  )
}

export default App