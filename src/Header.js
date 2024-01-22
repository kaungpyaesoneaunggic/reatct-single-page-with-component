import React from 'react'
import companyLogo from './images/company-logo.png'
import SmallText from './components/SmallText'
export default function () {
  return (
    <div className='border border-primary border-2 d-flex justify-content-around align-items-center' style={{ 
      margin:'15px 0px  0px 0px'
     }}>
        <img src={companyLogo} height={'100px'}></img>
        Global Innovation Consulting
        <div style={{width:'50%', marginRight:'10px'}} className='d-flex justify-content-between'>
        <SmallText
        text='Home'
        />
        <SmallText
        text='About'
        />
        <SmallText
        text='Services'
        />
        </div>
        
    </div>
  )
}
