import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Home from './Home';
import About from './About';
import Service from './Service';
import Footer from './Footer'

function App() {
  return (
        <div  style={{ width:'100%' ,background: '#355C7D',overflow:'hidden', }}>
          <div style={{width:'95%', margin:'auto' }}>
          <Header/>
          {/* Wrap each section with AnimatedSection */}
          <Home />
        
          <About />
        
          <Service />
          <Footer/>
          </div>
          
        </div>
        
  );
}

export default App;
