import React from 'react'
export default function ServiceColumn({img,text,btnName}) {
  return (
    <div className='text-center border border-primary' style={{ height:'400px',borderRadius:'10px', padding:'10px'}}>
      <div>
      <div style={{ backgroundColor:'white' ,borderRadius:'10px'}}>
      <img src={img} style={{ height:'150px', width:'100%',objectFit:'cover' ,borderRadius:'10px'}}></img>
      </div>
      </div>
      <div style={{margin:'10px'}}>
        <p style={{ height:'150px',padding:'10px', overflow:'auto', fontSize:'15px',display:'flex', alignItems:'center', justifyContent:'center'}}>
          {text}
        </p>
      </div>
      <button className='btn btn-primary'>{btnName}</button>
    </div>
  )
}
