import React, { useState } from 'react';
import '../styles/header.css';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import TextField from '@mui/material/TextField';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';



function Header() {
    const [isLight,setIsLight] = useState(false);
    const root = document.getElementById('root');
    const changeTheme = () => {
        setIsLight(!isLight);
        root.className = isLight ? 'lightTheme' : 'darkTheme';
    }
    
  return (
    <div className='flex-row2'>
      <div>
        <MenuBookIcon className={isLight ?  'menuIconDark':'menuIconLight'} />
      </div>
      <div className='flex-row1'>
        <TextField label="Tarif Ara" variant="standard" size="medium" />
        {
            isLight ? <LightModeIcon className='themeIcon' onClick={changeTheme}/> : <DarkModeIcon className='themeIcon' onClick={changeTheme}/>  
        }
        
        
      </div>
    </div>
  )
}

export default Header
