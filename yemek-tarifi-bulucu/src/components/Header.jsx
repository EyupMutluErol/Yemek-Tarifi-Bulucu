import React, { useState } from 'react';
import '../styles/header.css';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import TextField from '@mui/material/TextField';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SearchIcon from '@mui/icons-material/Search';
import Search from './Search';



function Header() {
    const [isLight,setIsLight] = useState(false);
    const [food,setFood] = useState('');
    const [showFood,setShowFood] = useState('');
    const root = document.getElementById('root');
    const changeTheme = () => {
        setIsLight(!isLight);
        root.className = isLight ? 'lightTheme' : 'darkTheme';
    }

    const handleChangeFood = e => {
      setFood(e.target.value);
    }
    const handleSearchClick = () =>{
      setShowFood(food);
    }
    
  return (
    <div className='flex-row2'>
      <div>
        <MenuBookIcon className={isLight ?  'menuIconDark':'menuIconLight'} />
      </div>
      <div className='flex-row1'>
        <TextField label="Tarif Ara" variant="standard" size="medium" onChange={handleChangeFood}/><SearchIcon className='searchIcon' onClick={handleSearchClick}/>
        {
            isLight ? <LightModeIcon className='themeIcon' onClick={changeTheme}/> : <DarkModeIcon className='themeIcon' onClick={changeTheme}/>  
        }
        
        {
          showFood && <Search food={showFood}/>
        }
        
      </div>
    </div>
  )
}

export default Header
