import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const View = () => {
    var[ viewDonor,setViewdonor]=useState([])
    var[ load,setLoad]=useState(true)
    axios.get("http://localhost:8000/api/getdonor").then((response)=>{
console.log(response.data)
setViewdonor(response.data)
setLoad(false)
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
<br></br>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
       
       {load ?<div class="d-flex justify-content-center">
  <div class="spinner-border text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div> :
 <table class="table table-primary">
 <thead>
   <tr>
     <th scope="col">Name</th>
     <th scope="col">Address</th>
     <th scope="col">Blood Group</th>
     <th scope="col">Phone Number</th>
     <th scope="col">Delete</th>
   </tr>
 </thead>
 <tbody>
   
  {viewDonor.map((value,key)=>{
      return <tr>
      <th scope="row">{value.donorname}</th>
      <td>{value.address}</td>
      <td>{value.blood}</td>
      <td>{value.mobile}</td>
      <td><button onClick={()=>{deleteDonor(value._id)}} className='btn btn-danger'>DELETE</button></td>
    </tr>
  })}


  
 </tbody>
</table>
}
       
</div>
</div>
</div>
    </div>
  )
}

export default View