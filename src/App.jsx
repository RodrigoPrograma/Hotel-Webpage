import { useState } from 'react'
import './App.css'
import Nav from './components/Navbar'
import Banner from './components/Banner.jsx'
import PorQueDeberias from './components/PorQueDeberias.jsx'
import SobreNosotros from './components/SobreNosotros.jsx'
import ServicesCards from './components/ServicesCards.jsx'
import { Footer } from './components/Footer.jsx'
import { Form } from './components/Form.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Banner />
      <PorQueDeberias />
      <SobreNosotros />
      <ServicesCards />
      <Form />
      <Footer />
    </>
  )
}

export default App
