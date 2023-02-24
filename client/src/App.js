import {BrowserRouter as Router} from 'react-router-dom'

import './App.css';
import Navbar from './components/Navbar/Navbar';
// trying to fix
function App() {
  return (
    <div className="App">
    <Router>
    <Navbar />
    </Router>
    </div>
  );
}

export default App;
