import { useState } from 'react'
import './App.css'
import Navigations from './components/Navigation/navigation'
import ContactHeader from './components/ContactHeader/contactheader'
import Contact from './components/contact/contact'

function App() {

  return (
    <>
      <div className='zoom-out'>
      <Navigations/>
      <main className="main_container">
      <ContactHeader/>
      <Contact/>
      </main>
      </div>
    </>

  )
}

export default App
