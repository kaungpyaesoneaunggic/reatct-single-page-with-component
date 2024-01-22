import React from 'react'
import TopLable from './components/TopLable'
import ServiceColumn from './components/ServiceColumn';
import celebrate from './images/celebrating.jpg'
import construction from './images/construction.png'
import programmer from './images/programmer.jfif'


export default function Service() {
  return (
    <div className=''>
      <TopLable lable={'This is service section'} />
      <div className='row' style={{ display: 'flex', justifyContent: 'space-between'}}>
        <div className='col-md-4'>
          <ServiceColumn
          img={celebrate}
          text='        " Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure."'
          btnName={'Celebrate Asap'}
          />
        </div>
        <div className='col-md-4'>
          <ServiceColumn
          img={construction}
          text='RBP Engineering is one of the experienced company in design, Fabrication and production Engineering.'
          btnName={'Consult With us'}
          />
        </div>
        <div className='col-md-4'>
          <ServiceColumn
          img={programmer}
          text='  Our code has a great sense of humor! Coding with a side of laughter. We turn bugs into features, and frowns into smiles.Software so good, it’ll make you giggle.Laugh your bugs away with our software.Coding made fun, one line at time.
.'        btnName={'Get An App Now'}
          />
        </div>
        
      </div>
    </div>
  );
}
