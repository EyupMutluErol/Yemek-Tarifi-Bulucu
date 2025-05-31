import React, { useState } from 'react';
import '../styles/header.css';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import TextField from '@mui/material/TextField';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SearchIcon from '@mui/icons-material/Search';

function Header({ onSearch }) {
  const [isLight, setIsLight] = useState(false);
  const [foodInput, setFoodInput] = useState('');

  const root = document.getElementById('root');

  const changeTheme = () => {
    setIsLight(!isLight);
    root.className = isLight ? 'lightTheme' : 'darkTheme';
  };

  const handleSearchClick = () => {
    onSearch(foodInput);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch(foodInput);
    }
  };

  return (
    <div className="flex-row2">
      <div>
        <MenuBookIcon className={isLight ? 'menuIconDark' : 'menuIconLight'} />
      </div>
      <div className="flex-row1">
        <TextField
          label="Search Meal"
          variant="standard"
          size="medium"
          onChange={(e)=>{
            setFoodInput(e.target.value);
            onSearch(foodInput);
          }}
          onKeyDown={handleKeyDown}
          
        />
        <SearchIcon className="searchIcon" onClick={handleSearchClick} />
        {isLight ? (
          <LightModeIcon className="themeIcon" onClick={changeTheme} />
        ) : (
          <DarkModeIcon className="themeIcon" onClick={changeTheme} />
        )}
      </div>
    </div>
  );
}

export default Header;
