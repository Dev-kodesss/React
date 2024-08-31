import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetail() {
    let [detail, setDetail] = useState({})
    const {id} = useParams()   
    useEffect(function(){
        fetch('https://dummyjson.com/products/'+id).then(response=>response.json()).then((data)=>{
            console.log(data)
            setDetail(data)
            })
    },[])
 

  return (
    <div className='container w-50 border border-3 rounded-2 mt-5'>
      <div>{detail.title}</div>
      <p>{detail.description}</p>
      <p>{detail.price}</p>
      <img src= {detail.images} className='w-25 h-25' />
    </div>
  )
}
