import { useState } from 'react'
import Container from './components/Container'
import Header from './components/Header'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
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
     
    </div>
  )
}

export default App
