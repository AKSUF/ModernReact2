import { Route, BrowserRouter as Router, Routes,Switch} from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar';
import Error from './components/Error';
import Posts from './components/Posts';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<About />} />
          <Route path="/posts/:category" element={<Posts />} />

          <Route path="*" element={<Error />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;


