import React from "react";
import Recipe from "./Recipe";

export default function RecipeList({ recipes }) {
  return (
    <div>
      {recipes.map((recipe) => (
        <Recipe key={recipe.id} {...recipe} />
      ))}

      <button className="btn btn--primary">Add Recipe</button>
    </div>
  );
}