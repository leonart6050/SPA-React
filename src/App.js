import React from "react";
import Nav from "./Components//Nav";
import Footer from "./Components/Footer";
import './App.css';
import Logo from "./Components//Logo";

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
