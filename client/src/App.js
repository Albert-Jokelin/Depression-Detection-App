import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './components/home'
// import Auth4 from './components/Auth4'
import './app.css'

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>

        <div className='AppBody'>
          <Navbar />
          <Routes>
            <Route path='/' exact element={<Home />} />
            {/* <Route path='/auth' exact element={<Auth4 />} /> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}


export default App
