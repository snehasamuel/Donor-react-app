import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const Search = () => {
    var [data,setData]=useState([{"address":"","blood":"","mobile":"number"}])
    const [name,setName]=useState("")
    const searchValues=(()=>{
        var readName={"donorname":name}
        axios.post("http://localhost:8000/api/search",readName).then((response)=>{
console.log(response.data)
setData(response.data.data)
        })
        
    })

    const deleteDonor=((id)=>{
        const data={"_id":id}
        axios.post("http://localhost:8000/api/delete",data).then((response)=>{
        console.log(response.data)
        if(response.data.status=="success")
        {
          alert("deleted successfully")
        }
        else
        {
          alert("failed to delete")
        }
        })
})
  return (
    <div>
        <Header/>
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Name</label>
                    <input onChange={(a)=>{setName(a.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={searchValues} className="btn btn-primary">SEARCH</button>
                    </div>
                    </div>

{data.map((value,key)=>{
    return   <div className='row g-3'>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <label for="" className="form-label">Address</label>
        <input value={value.address} type="text" className="form-control"/>
    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <label for="" className="form-label">Blood Group</label>
        <input value={value.blood} type="text" className="form-control"/>
    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <label for="" className="form-label">Phone Number</label>
        <input value={value.mobile} type="number" className="form-control"/>
    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <button onClick={()=>{deleteDonor(value._id)}} className="btn btn-danger">DELETE</button>   
    </div>
</div>
})}
                  
        </div>
    </div>
</div>
    </div>
  )
}

export default Search