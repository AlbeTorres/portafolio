import { useState } from "react";
import Contact from "./components/Contact";
import Container from "./components/Container";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import SkillSection from "./components/SkillSection";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div className="App font-mono    ">
      <Header>
        <Navbar />
        <Container>
          <Hero />
        </Container>
      </Header>
      <SkillSection />
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
