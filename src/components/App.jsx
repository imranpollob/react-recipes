import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import RecipeList from "./RecipeList";
import "./../css/app.css";

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes);

  function handleAddRecipe(params) {
    const newRecipe = {
      id: uuidv4(),
      name: "New",
      servings: 3,
      cookTime: "1:00",
      instructions: "Some instructions",
      ingredients: [
        {
          id: uuidv4(),
          name: "Ingredient name",
          amount: "1 pound",
        },
      ],
    };

    setRecipes([...recipes, newRecipe]);
  }

  function handleDeleteRecipe(id) {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  }

  return (
    <div className="App">
      <RecipeList
        recipes={recipes}
        handleAddRecipe={handleAddRecipe}
        handleDeleteRecipe={handleDeleteRecipe}
      />
    </div>
  );
}

const sampleRecipes = [
  {
    id: 1,
    name: "Plain Chicken",
    servings: 3,
    cookTime: "1:45",
    instructions:
      "1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken",
    ingredients: [
      {
        id: 1,
        name: "Chicken",
        amount: "2 Pounds",
      },
      {
        id: 2,
        name: "Salt",
        amount: "1 Tbs",
      },
    ],
  },
  {
    id: 2,
    name: "Plain Beef",
    servings: 5,
    cookTime: "0:45",
    instructions: "1. Put paprika on beef\n2. Put beef in oven\n3. Eat beef",
    ingredients: [
      {
        id: 1,
        name: "Beef",
        amount: "3 Pounds",
      },
      {
        id: 2,
        name: "Paprika",
        amount: "2 Tbs",
      },
    ],
  },
];

export default App;
