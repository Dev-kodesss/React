import React, { useState } from "react";
 
export default function Form(){
    const[login, setLogin] = useState("login")
    return(
    
   <div className="container mt-5">
    <button className="btn btn-primary me-4" onClick={()=>{ setLogin("login")}}>Login</button>
    <button className="btn btn-danger" onClick={ ()=>{ setLogin("Register")}}>Register</button>
   {(login=="login")? <div className="card w-25 m-auto">
        <div className="card-Header">
            <h3 className="text-center mt-2">Login Form</h3>
        </div>
        <div className="card-body">
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter your password"  />
                </div>
                <button type="Sumbit" className="btn btn-primary w-100">Login</button>
                <button type= "submit" className="btn btn-link mt-2">Register?</button>
            </form>
        </div>
    </div>:
    <div className="card w-25 m-auto">
        <div className="card-Header">
            <h3 className="text-center mt-2">Register form</h3>
        </div>
        <div className="card-body">
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter your password"  />
                </div>
                <div className="mb-3">
                    <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="confirm-password" placeholder="Enter your password"  />
                </div>
                
                <button type="Sumbit" className="btn btn-primary w-100">Register</button>
                
            </form>
        </div>
    </div>}
   </div>
    )
}