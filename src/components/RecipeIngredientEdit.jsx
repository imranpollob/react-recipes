import React from "react";

export default function RecipeIngredientEdit(props) {
  const { ingredient, handleUpdateIngredient, handleDeleteIngredient } = props;

  function handleUpdateIngredientPreProcess(params) {
    handleUpdateIngredient(ingredient.id, { ...ingredient, ...params });
  }

  return (
    <>
      <input
        type="text"
        value={ingredient.name}
        onInput={(event) =>
          handleUpdateIngredientPreProcess({ name: event.target.value })
        }
      />
      <input
        type="text"
        value={ingredient.amount}
        onInput={(event) =>
          handleUpdateIngredientPreProcess({ amount: event.target.value })
        }
      />
      <button onClick={() => handleDeleteIngredient(ingredient.id)}>
        &times;
      </button>
    </>
  );
}
