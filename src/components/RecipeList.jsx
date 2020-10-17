import React from "react";
import Recipe from "./Recipe";

export default function RecipeList(props) {
  const { recipes, handleAddRecipe, handleDeleteRecipe } = props;
  return (
    <div className="recipe-list">
      <div>
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.id}
            {...recipe}
            handleDeleteRecipe={handleDeleteRecipe}
          />
        ))}
      </div>

      <div className="recipe-list__button-container">
        <button className="btn btn--primary" onClick={() => handleAddRecipe()}>
          Add Recipe
        </button>
      </div>
    </div>
  );
}
