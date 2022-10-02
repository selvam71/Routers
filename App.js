import './App.css';
import Navigation from './Nav'; 
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Home';
import Application from './Application';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="application" element={<Application/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>

        </Routes>
      </BrowserRouter>
      
      
      
    </div>
  );
}

export default App;
