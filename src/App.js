import React from 'react';
import './App.css';
import Navbar from "./components/header/navbar";
import Home from "./components/home/home";
import About from "./components/about/about";
import Scholarship from "./components/scholarships/scholarship";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Scholarship/>
      <Footer/>
    </div>
  );
}

export default App;
