import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import Container from '@mui/material/Container';

function App() {
  return (
    <div className='wrapper'>
      <Container maxWidth="md">
        <Header />
      </Container>
    </div>

  )
}

export default App
