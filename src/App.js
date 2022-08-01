import React from "react";
import "@fontsource/poppins";
import './App.css';


import NavBar from './components/navBar';
import CardPanel from './components/cardPanel';
import TextIntro from './components/textBlock_intro';
import TextJoin from './components/textBlock_join';
import Footer from "./components/footer";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <TextIntro/>
      <TextJoin/>
      <CardPanel/>
      <Footer/>
    </div>
  );
}

export default App;
