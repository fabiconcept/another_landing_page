import React from 'react'
import Home from './components/home';
import About from './components/about';
import Sponsors from './components/sponsors';
import FooterDiv from './components/footer';

const App = () => {
  return (
    <div className="app">
      <Home />
      <About />
      <Sponsors />
      <FooterDiv />
    </div>
  )
}

export default App;