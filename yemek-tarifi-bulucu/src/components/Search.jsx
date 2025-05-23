import React, { useState } from 'react'
import Header from './Header'
import axios from 'axios';

function Search({food}) {
    const [foods,setFoods] = useState([]);
    const [nextFood,setNextFood]=useState({});
    const getFoodByName = async() => {
        const data = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`).then((response)=>response.data);
        const {strMeal,strArea,strInstructions,strMealThumb,strYoutube} = data.meals[0];
        setNextFood(...nextFood,{strMeal,strArea,strInstructions,strMealThumb,strYoutube});
        console.log(nextFood);
    }
    getFoodByName();

    // const handleSetFood = () => {
    //     const nextFood = getFoodByName();
    //     console.log(nextFood);
    // }
    // handleSetFood();
  return (
   
    <div>
        
    </div>
  )
}

export default Search
