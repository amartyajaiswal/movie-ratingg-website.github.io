import React from 'react'
import { Routes,Route } from 'react-router-dom'

import Home from './pages/Home'
import CategoryPopular from './pages/CategoryPopular'
import CategoryTopRated from './pages/CategoryTopRated'
import CategoryUpcoming from './pages/CategoryUpcoming'
import Header from './components/Common/Header'
import Footer from './components/Common/Footer'

const App = () => {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/categoryPopular" element={<CategoryPopular/>}/>
      <Route path="/categoryTopRated" element={<CategoryTopRated/>}/>
      <Route path="/categoryUpcoming" element={<CategoryUpcoming/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App