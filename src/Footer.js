import React from 'react'

export default function Footer() {
  return (
    <div className='border border-primary border-2 d-flex justify-content-around align-items-center'
      style={{ margin:'50px 0px 10px 0px',padding:'10px',borderRadius:'10px', backgroundColor:'white'}}
    >
      <div className='text-center' style={{ width:'80%',}}>
      
      <p style={{ display:'flex',justifyContent:'flex-start', marginBottom:'0', color:'black', fontWeight:'bold'}}>
      Copy Right © All rights reserved 2024 
      </p>
      </div>
      <btn className="btn btn-primary" style={{ outerWidth:'20%' }}>LogOut</btn>
    </div>
  ) 
}
