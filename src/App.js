import './App.css';
import Navbar from './Navbar';
import Content from './Content';
import { Footer } from './Footer';
import { Route, Routes } from 'react-router-dom';
import { FAQ } from './Content/FAQ';


function App() {
  return (
    <div className="App">
      <div>
          <header className="nav">
              <Navbar />
          </header> 
          <Routes>
            <Route path='/home' element={<Content/>} />
            <Route path='/faq' element={<FAQ/>} />
          </Routes>
      </div>
      
      <Footer/>
    </div>
    
  );
}

export default App;
