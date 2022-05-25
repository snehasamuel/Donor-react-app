import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    var [name,setName]=useState("")
    var [address,setAddress]=useState("")
    var [blood,setBlood]=useState("")
    var [number,setNumber]=useState("")
    var [user,setUser]=useState("")
    var [pswd,setPswd]=useState("")

    const viewSigup=(()=>{
        const details={"name":name,"address":address,"blood_group":blood,"phone_number":number,"username":user,"password":pswd}
        console.log(details)
    })
  return (
    <div>
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Name</label>
                    <input onChange={(e)=>{setName(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Address</label>
                    <textarea onChange={(e)=>{setAddress(e.target.value)}} name="" id="" cols="20" rows="5" className="form-control"></textarea>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Blood Group</label>
                    <input onChange={(e)=>{setBlood(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Phone Number</label>
                    <input onChange={(e)=>{setNumber(e.target.value)}} type="number" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Username</label>
                    <input onChange={(e)=>{setUser(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Password</label>
                    <input onChange={(e)=>{setPswd(e.target.value)}} type="password" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={viewSigup} className="btn btn-primary">REGISTER</button><br></br>
                    <Link to="/">Already a user?? Signin!! </Link>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Signup