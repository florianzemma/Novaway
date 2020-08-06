import React from 'react';
import './App.css';
import RecipeCard from './Components/RecipeCard';

const data = {
  name : "Shrimp",
  desc : "with avocado",
  time : "40 min",
  calories : 430,
  rate : 9.8,
  votes : 121,
  username : "username"
}

function App() {

  return (
    <div className = "App">
        <RecipeCard RecipeName = { data.name } RecipeDesc = { data.desc } RecipeTime = { data.time } RecipeCalories = { data.calories } RecipeRate = { data.rate } RecipeVotes = { data.votes } UserName = { data.username } />
    </div>
  );
}

export default App;
