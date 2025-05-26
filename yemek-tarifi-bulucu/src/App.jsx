import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import FoodCard from './components/FoodCard';
import Container from '@mui/material/Container';



function App() {
  return (
    <div className='wrapper'>
      <Container maxWidth="md">
        <Header />
        <FoodCard/>
      </Container>
    </div>

  )
}

export default App
