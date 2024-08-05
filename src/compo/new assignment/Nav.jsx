import React, { useState } from 'react'

function Nav() {
    let [nav, setNav] = useState("about")
  return (
    <div className='container-fluid'>
        <div className='nav-container'>
   <button className='btn text-primary' onClick={()=>{setNav("about")}}>About</button>
   <button className='btn text-primary' onClick={()=>{setNav("Contactus")}}>Contact us</button>
   <button className='btn text-primary' onClick={()=>{setNav("products")}}>Products</button>
   <button className='btn text-primary' onClick={()=>{setNav("supply")}}>Supply</button>
    </div>
    <div className="content">

     {nav=="about" ?    <div className="about">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur reiciendis error aut debitis veritatis quae cum libero enim. Recusandae, itaque rem praesentium iure inventore tempora reprehenderit molestiae incidunt facere maxime!</p>
        </div>: ""}
       {nav==="Contactus" ?  <div className="Contact us">
            <p className='text-secondary'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur reiciendis error aut debitis veritatis quae cum libero enim. Recusandae, itaque rem praesentium iure inventore tempora reprehenderit molestiae incidunt facere maxime!</p>
        </div>: ""}
       {nav==="products" ?  <div className="products">
            <p className='text-danger'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur reiciendis error aut debitis !</p>
        </div>: ""}
       {nav==="supply" ?  <div className="supply">
            <p className='text-primary'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur reiciendis error aut debitis veritatis quae cum libero enim. Recusandae, itaque rem praesentium iure inventore tempora reprehenderit molestiae incidunt facere maxime!</p>
        </div>: ""}

    </div>
    </div>
  )
}

export default Nav