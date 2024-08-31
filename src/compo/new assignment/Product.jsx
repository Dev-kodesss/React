import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Product() {
  const [product, setProduct] = useState([])

  useEffect(function(){
    fetch('https://dummyjson.com/products').then(response=>response.json()).then((data)=>{
     
      setProduct(data.products)
    })
  },[])
     return(
      <div className='container text-center pt-3'>
        <h2>Products</h2>
        <div className='row gap-4'>
        
          {product.map(function(item){
            return <div  className='col-md-3 border border-2 rounded-2 p-6' key={item.id}>
              <Link to={`/productdetail/${item.id}`} className='nav-link'>
              <div>{item.title}</div>
            <div>{item.price}</div>
            <div>{item.description}</div>
            <img src={item.images[0]} alt='' className='w-50' />
              </Link>
            </div>
            
            
          
         
          })}
            
          </div>
       </div>
     )
}
