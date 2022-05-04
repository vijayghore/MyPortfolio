import React from 'react'
import styled from 'styled-components'
import About from './components/About'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Skills from './components/Skills'

const App = () => {
  return (
    <AllComponents>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Footer />
    </AllComponents>
  )
}

export default App

const AllComponents = styled.div`
  margin: 0;
  padding: 0; 
`;