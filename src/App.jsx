import { Route, BrowserRouter as Router, Routes,Switch} from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar';
import Error from './components/Error';
import Posts from './components/Posts';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/services" element={<Services number="5" />} /> */}
          <Route path="/services" render={()=><Services number="5"/>} />
          <Route path="/:category/:topic" render={({ match }) => <Posts match={match} />} />

          <Route path="*" element={<Error />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;


