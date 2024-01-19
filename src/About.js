import React from 'react'
import TopLable from './components/TopLable'
import shaking from './images/shaking-hand.jpg'

export default function About() {
  return (
    <div className=''>
      <TopLable lable={'This is About Section'} />
      <div
        className='border border-2 border-primary row'
        style={{
          margin: '15px',
          padding:'10px',
          borderRadius: '15px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className='col' style={{ backgroundColor:'white'}}>
        <img
            src={shaking}
            style={{ width: '100%', height: 'auto' }}
            alt='Shaking Image'
          />  
        </div>
        <div className='col'>
        <p
            className='text-center'
            style={{
              margin: '10px',
              maxHeight: '300px',
              overflow: 'auto',
            }}
          >
                      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.  /a 1914 translation by H. Rackham"

          </p>
        </div>
      </div>
    </div>
  );
};
