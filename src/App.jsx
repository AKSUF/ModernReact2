import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'

import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">


      <Router>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

