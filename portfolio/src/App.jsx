import { useState } from 'react'
import Container from './components/Container'
import Header from './components/Header'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import SkillSection from './components/SkillSection'
import './index.css'

function App() {
  

  return (
    <div className="App font-mono    ">
    <Header>
      <Navbar/>
    <Container>
      <Hero/>

    </Container>

    </Header>
    
      <SkillSection/>
     
    </div>
  )
}

export default App
