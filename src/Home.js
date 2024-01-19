import React from 'react'
import komi from './images/komi.jpg'
import TopLable from './components/TopLable';
export default function Home() {
  return (
    <div >
      <TopLable
      lable={'Welcome To Our Site '}
      />
      <div className='row d-flex justify-content-center' style={{padding:'10px'}}>
        <div className='col d-flex align-items-center justify-content-center border border-primary border-2' style={{ borderRadius:'15px', height:'300px'}}>
          
          <div className='text-center w-100' style={{ overflow:'auto', maxHeight:'100%', minWidth:'100%'}}>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
            </p>
          </div>
        </div>
        <div className='col d-flex align-items-center justify-content-center'>
          <img src={komi} className='border border-2 border-primary ' style={{ height:'300px', borderRadius:'15px' }} alt="Komi"></img>
        </div>
      </div>
    </div>
  );
  
}
