import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from './Header';
import Home from './Home';
import About from './About';
import Service from './Service';
import Footer from './Footer';
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    AOS.init( {duration:2000})
  },[])
  return (
        <div  style={{ width:'100%' ,background: '#3e3e42',overflow:'hidden', }}>
          <div style={{width:'95%', margin:'auto' }}>
            <Header/>
            <div data-aos="fade-up">
              <Home />
            </div>
            <div data-aos="fade-up">
              <About />
            </div>
            <div data-aos="fade-up">
              <Service />
            </div>
            <Footer/>
          </div>
          
        </div>
        
  );
}

export default App;
