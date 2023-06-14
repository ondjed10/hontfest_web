import './App.css';
import Navbar from './Navbar';
import Content from './Content';
import { Footer } from './Footer';

function App() {
  return (
    <div className="App">
      <div>
        <header className="nav">
        <Navbar></Navbar>
        </header>
        <Content/>
      </div>
      
      <Footer/>
    </div>
    
  );
}

export default App;
