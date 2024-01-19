import React from 'react'

export default function TopLable({lable}) {
  return (
    <div className='d-flex justify-content-center'>
      <button className='border border-primary border-2' style={{display:'inline-block',borderRadius:'15px',margin:'60px', padding:'10px 60px 10px 60px' ,background: '#0275d8',}}>{lable}</button>
    </div>
  )
}
