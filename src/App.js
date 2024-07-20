import React from 'react';
import About from "./components/About"
import Home from './components/Home'; 
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    <div>
      <NavBar />
      <Home /> {/* Capitalized component name */}
      <About/>
      <Portfolio/>
      <SocialLinks/>

    </div>
  );
}

export default App;
