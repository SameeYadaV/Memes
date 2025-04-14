import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card';

const CardList = () => {
    const data=useSelector(store=>store.data);
  return (
    <div className='flex flex-wrap justify-between  mt-15' >
        {
            data.map((item,idx)=>{
              return  <Card key={idx} d={item} />
            })
        }
    </div>
  )
}

export default CardList