import React, { useContext } from "react";
import RecipeIngredientEdit from "./RecipeIngredientEdit";
import { RecipeContext } from "./App";

export default function RecipeEdit({ recipe }) {
  const { handleUpdateRecipe } = useContext(RecipeContext);

  function handleUpdateRecipePreProcessing(params) {
    handleUpdateRecipe(recipe.id, { ...recipe, ...params });
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
            handleUpdateRecipePreProcessing({ name: event.target.value })
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
            handleUpdateRecipePreProcessing({ name: event.target.value })
          }
        />
        <label htmlFor="instructions">Instructions</label>
        <textarea name="instructions" id="instructions">
          {recipe.instructions}
        </textarea>
      </div>
      <br />
      <label>Ingredients</label>
      <div>
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        {recipe.ingredients.map((ingredient) => (
          <RecipeIngredientEdit key={ingredient.id} {...ingredient} />
        ))}
      </div>
      <div>
        <button>Add Ingredient</button>
      </div>
    </div>
  );
}
