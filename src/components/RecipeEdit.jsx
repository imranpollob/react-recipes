import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import RecipeIngredientEdit from "./RecipeIngredientEdit";
import { RecipeContext } from "./App";

export default function RecipeEdit({ recipe }) {
  const { handleUpdateRecipe } = useContext(RecipeContext);

  function handleUpdateRecipePreProcessing(params) {
    handleUpdateRecipe(recipe.id, { ...recipe, ...params });
  }

  function handleAddIngredient() {
    // we use destructuring instead of push or pop to create new object without touching the original object
    const ingredients = [
      ...recipe.ingredients,
      {
        id: uuidv4(),
        name: "",
        amount: "",
      },
    ];

    handleUpdateRecipePreProcessing({ ingredients: ingredients });
  }

  function handleUpdateIngredient(id, ingredient) {
    const tempIngredients = [...recipe.ingredients];
    const index = tempIngredients.findIndex((i) => i.id === id);
    tempIngredients[index] = ingredient;
    handleUpdateRecipePreProcessing({ ingredients: tempIngredients });
  }

  function handleDeleteIngredient(id) {
    const tempIngredients = [...recipe.ingredients];

    handleUpdateRecipePreProcessing({
      ingredients: tempIngredients.filter((ingredient) => ingredient.id !== id),
    });
  }

  return (
    <div className="recipe-edit">
      <div>
        <button>&times;</button>
      </div>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={recipe.name}
          onInput={(event) =>
            handleUpdateRecipePreProcessing({ name: event.target.value })
          }
        />
        <label htmlFor="cookTime">Cook Time</label>
        <input
          type="text"
          name="cookTime"
          id="cookTime"
          value={recipe.cookTime}
          onInput={(event) =>
            handleUpdateRecipePreProcessing({ cookTime: event.target.value })
          }
        />
        <label htmlFor="servings">Servings</label>
        <input
          type="number"
          min="1"
          name="servings"
          id="servings"
          value={recipe.servings}
          onInput={(event) =>
            handleUpdateRecipePreProcessing({ servings: event.target.value })
          }
        />
        <label htmlFor="instructions">Instructions</label>
        <textarea
          name="instructions"
          id="instructions"
          value={recipe.instructions}
          onInput={(event) =>
            handleUpdateRecipePreProcessing({
              instructions: event.target.value,
            })
          }
        />
      </div>
      <br />
      <label>Ingredients</label>
      <div>
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        {recipe.ingredients.map((ingredient) => (
          <RecipeIngredientEdit
            key={ingredient.id}
            ingredient={ingredient}
            handleUpdateIngredient={handleUpdateIngredient}
            handleDeleteIngredient={handleDeleteIngredient}
          />
        ))}
      </div>
      <div>
        <button onClick={() => handleAddIngredient()}>Add Ingredient</button>
      </div>
    </div>
  );
}
