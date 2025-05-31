import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Search({ foods, searchQuery }) {
  const filteredFoods = foods.filter((food) =>
    food.strMeal.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex-row2">
      {filteredFoods.length === 0 && searchQuery && (
        <Typography variant="h6" style={{ margin: '20px' }}>
          No results found for "{searchQuery}"
        </Typography>
      )}
      {filteredFoods.map((food) => (
        <Card className="card" key={food.idMeal}>
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
              {food.ingredients.map((ing, index) => (
                <li key={index}>{ing}</li>
              ))}
            </ul>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              onClick={() =>
                window.open(food.strSource || '#', '_blank')
              }
            >
              Detaya Git
            </Button>
            <Button
              size="small"
              onClick={() =>
                window.open(food.strYoutube || '#', '_blank')
              }
            >
              Videoya Git
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

export default Search;
