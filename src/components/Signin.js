import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {
    var [user,setUser]=useState("")
    var [pswd,setPswd]=useState("")

    const viewSigin=(()=>{
        const data={"username":user,"password":pswd}
        console.log(data)
    })
  return (
    <div>
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Username</label>
                    <input onChange={(a)=>{setUser(a.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Password</label>
                    <input onChange={(a)=>{setPswd(a.target.value)}} type="password" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={viewSigin} className="btn btn-primary">LOGIN</button><br></br>
                    <Link to="/signup">New User?? Click here!! </Link>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Signin