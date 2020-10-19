import React from "react";

export default function RecipeIngredientEdit({ name, amount }) {
  return (
    <>
      <input type="text" value={name} />
      <input type="text" value={amount} />
      <button>&times;</button>
    </>
  );
}
