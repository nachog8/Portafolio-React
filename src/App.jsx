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
      <main className="main-flex">
        <Hero />
        <Projects />
        <Technologies />
        <Extra />
        <About />
      </main>
      <Contact />
      <ScrollButton />
    </div>
  );
}

export default App;
