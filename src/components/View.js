import React from 'react'
import Header from './Header'

const View = () => {
    var viewDonor=[{"name":"Sneha","address":"hdhdgjf","blood_group":"B+ve","phone_number":"44167613213"},
    {"name":"Sajan","address":"hsdgshd","blood_group":"B+ve","phone_number":"656146465"},
    {"name":"Ernesto","address":"bsvchsc","blood_group":"O+ve","phone_number":"43214656"},
    {"name":"Mini","address":"hgfghfhvj","blood_group":"A+ve","phone_number":"65364656"},
    {"name":"Sanjo","address":"sjdhgfshjg","blood_group":"B+ve","phone_number":"645416323"},
    {"name":"Anil","address":"hdfvhsdfds","blood_group":"A-ve","phone_number":"646461631"}]
  return (
    <div>
        <Header/>
<br></br>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <table class="table table-primary">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Address</th>
      <th scope="col">Blood Group</th>
      <th scope="col">Phone Number</th>
    </tr>
  </thead>
  <tbody>
    
   {viewDonor.map((value,key)=>{
       return <tr>
       <th scope="row">{value.name}</th>
       <td>{value.address}</td>
       <td>{value.blood_group}</td>
       <td>{value.phone_number}</td>
     </tr>
   })}
   
  </tbody>
</table>
</div>
</div>
</div>
    </div>
  )
}

export default View