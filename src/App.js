import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import './App.css';
import Logo from "./Logo";

function App() {
  return (
    <div className="App">
      <Logo></Logo>
      <div>
        <Nav></Nav>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
    
  );
}

export default App;