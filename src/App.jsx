import './sass/main.css';

import NavBar from './components/NavBar'

import Home from './pages/Home'

import Cart from './components/CartOverlay'


function App() {
  return (
    <div className="App">
      <NavBar />

      <Home />

      <Cart />
    </div>
  );
}


export default App;