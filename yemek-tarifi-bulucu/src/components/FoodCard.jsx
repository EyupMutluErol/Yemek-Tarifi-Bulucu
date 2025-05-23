import React, { useEffect, useState } from 'react'
import axios from 'axios';

function foodCard() {
    const [foods,setFoods] = useState([]);
    useEffect(()=>{
        const getAllFoods = async() => {
            const data = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`).then((response)=>response.data);
            setFoods(data.meals);
        }
        getAllFoods();
    },[])


     
  return (
    <div>
      {
        foods.map((food)=>{
            return (<div key={food.idMeal}>
                <p>{food.strMeal}</p>
                <p>{food.strArea}</p>
                <p>{food.strInstructions}</p>
            </div>)
        })
      }
    </div>
  )
}

export default foodCard
