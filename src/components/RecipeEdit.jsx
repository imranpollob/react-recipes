import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import RecipeIngredientEdit from "./RecipeIngredientEdit";
import { RecipeContext } from "./App";

export default function RecipeEdit({ recipe }) {
  const { handleSelectRecipe, handleUpdateRecipe } = useContext(RecipeContext);

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
      <div className="recipe-edit__remove-button-container">
        <button
          className="btn recipe-edit__remove-button"
          onClick={() => handleSelectRecipe(undefined)}
        >
          &times;
        </button>
      </div>
      <div className="recipe-edit__details-grid">
        <label htmlFor="name" className="recipe-edit__label">
          Name
        </label>
        <input
          type="text"
          className="recipe-edit__input"
          name="name"
          id="name"
          value={recipe.name}
          onChange={(event) =>
            handleUpdateRecipePreProcessing({ name: event.target.value })
          }
        />
        <label htmlFor="cookTime" className="recipe-edit__label">
          Cook Time
        </label>
        <input
          type="text"
          className="recipe-edit__input"
          name="cookTime"
          id="cookTime"
          value={recipe.cookTime}
          onChange={(event) =>
            handleUpdateRecipePreProcessing({ cookTime: event.target.value })
          }
        />
        <label htmlFor="servings" className="recipe-edit__label">
          Servings
        </label>
        <input
          type="number"
          className="recipe-edit__input"
          min="1"
          name="servings"
          id="servings"
          value={recipe.servings}
          onChange={(event) =>
            handleUpdateRecipePreProcessing({ servings: event.target.value })
          }
        />
        <label htmlFor="instructions" className="recipe-edit__label">
          Instructions
        </label>
        <textarea
          name="instructions"
          className="recipe-edit__input"
          id="instructions"
          value={recipe.instructions}
          onChange={(event) =>
            handleUpdateRecipePreProcessing({
              instructions: event.target.value,
            })
          }
        />
      </div>
      <br />
      <label className="recipe-edit__label">Ingredients</label>
      <div className="recipe-edit__ingredient-grid">
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
      <div className="recipe-edit__add-ingredient-btn-container">
        <button
          className="btn btn--primary"
          onClick={() => handleAddIngredient()}
        >
          Add Ingredient
        </button>
      </div>
    </div>
  );
}
