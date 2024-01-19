import React from 'react'

export default function SmallText({text}) {
  return (

<button className='border border-primary' style={{ display: 'inline-block',borderRadius:'5px', padding:'2% 7% 2% 7%', backgroundColor:'#0275d8'}}>
    {text}
  </button>    )
}

