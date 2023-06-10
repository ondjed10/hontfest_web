import './App.css';
import Navbar from './Navbar';
import Content from './Content';

function App() {
  return (
    <div className="App">
      <header className="nav">
        <Navbar></Navbar>
      </header>
      <div className='intro'>
        <h1>Hontfest 2023</h1>
      </div>
      
      <Content/>
    </div>
  );
}

export default App;
