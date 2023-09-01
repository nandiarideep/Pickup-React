import React from 'react';
import Navbar from '../src/components/NavBar';
import Footer from '../src/components/Footer';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Cities from './modals/Cities'


const App = () => {
  return (
    <div>
      <div className='flex min-h-full w-full flex-col'>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Cities' element={<Cities />} />
        </Routes>
        <Footer />
      </div>
      {/* <Cities /> */}
    </div>
  )
}

export default App
