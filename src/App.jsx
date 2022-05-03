import './sass/main.css';

import NavBar from './components/NavBar'

import Home from './pages/Home'

import Cart from './components/CartOverlay'
import { useState } from 'react';


function App() {
  
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className="App">
      <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />

      <Home />

      <Cart isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}


export default App;