import React from 'react'
import komi from './images/komi.jpg'
import SmallText from './components/SmallText'
export default function () {
  return (
    <div className='form-control border-success d-flex justify-content-around align-items-center' style={{ width:'95%', margin:'auto'}}>
        <img src={komi} height={'70px'} style={{borderRadius:'50%'}}></img>
        <div className='d-flex justify-content-between w-50 p-3'>
        <SmallText
        text='testing'
        />
        <SmallText
        text='Meh'
        />
        <SmallText
        text='Okkay'
        />
        </div>
        
    </div>
  )
}
