import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Extra from "./components/Extra";
import About from "./components/About";
import Contact from "./components/Contact";
import ScrollButton from "./components/Scroll-Button";
import "./index.css";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Projects />
      <Technologies />
      <Extra />
      <About />
      <Contact />
      <ScrollButton />
    </div>
  );
}

export default App;
