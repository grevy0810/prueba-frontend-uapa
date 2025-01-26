import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Features from './components/Features'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'

function App() {

  return (
    <div className="h-full w-full bg-white">
      <Header />
      <Features/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default App
