import React from "react";
import './Product.css'

function Product(props) {
    return (
        <div>

            <div className="border p-3 rounded">
                <img src={props.img} className="img-fluid w-100" />
                <p className="fs-4 p-4">{props.title}</p>
                <i>{props.content}</i>
                <p className="badge bg-black">Rs.{props.price}</p>
                <button type="button" className="btn btn-success p-2 align-center w-100">Buy now</button>
                
            </div> 
        </div>

    )
}
export default Product