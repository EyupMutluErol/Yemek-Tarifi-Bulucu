import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

function FoodCard() {
  const [foods, setFoods] = useState([]);
  const [showLoading,setShowLoading] = useState(true);

  useEffect(() => {
    const getAllFoods = async () => {
      const allMeals = [];

      for (let i = 97; i < 122; i++) {
        let character = String.fromCharCode(i);
        try {
          const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${character}`);
          const data = response.data;

          if (data.meals) {
            const mealsWithIngredients = data.meals.map(meal => {
              const ingredients = [];
              for (let j = 1; j <= 20; j++) {
                const ingredient = meal[`strIngredient${j}`];
                if (ingredient && ingredient.trim() !== '') {
                  ingredients.push(ingredient);
                }
              }
              return { ...meal, ingredients };
            });

            allMeals.push(...mealsWithIngredients);
          }

        } catch (error) {
          console.error("Veri alınamadı:", error);
        }

      }
      setFoods(allMeals);
      setShowLoading(false);
    };

    getAllFoods();
  }, []);


  

  return (
    <div className='flex-row2' >
      {showLoading ? <div className='loadingDiv'><CircularProgress/></div> : 
        foods.map((food) => (
          <Card className='card' key={food.idMeal} >
            <CardMedia
              sx={{ height: 150 }}
              image={food.strMealThumb}
              title={food.strMeal}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {food.strMeal}
              </Typography>
              <ul>
                {
                  food.ingredients.map((ing, index) => (
                    <li key={index}>{ing}</li>
                  ))
                }
              </ul>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => window.open(food.strSource || "#", '_blank')}>Detaya Git</Button>
              <Button size="small" onClick={() => window.open(food.strYoutube || "#", '_blank')}>Videoya Git</Button>
            </CardActions>
          </Card>
        ))
      }
    </div>
  );
}

export default FoodCard;
