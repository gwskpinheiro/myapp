import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './Components/Menu';
import Home from './Screens/Home';
import Historia from './Screens/Historia';
import FaleConosco from './Screens/FaleConosco';
import Galeria from './Screens/Galeria';
import './css/App.css';

function App() {
  return (
    <Router>
      <Menu />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/fale-conosco" element={<FaleConosco />} />
          <Route path="/galeria" element={<Galeria />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;