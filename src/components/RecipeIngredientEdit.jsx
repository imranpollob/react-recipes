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
        className="recipe-edit__input"
        value={ingredient.name}
        onChange={(event) =>
          handleUpdateIngredientPreProcess({ name: event.target.value })
        }
      />
      <input
        type="text"
        className="recipe-edit__input"
        value={ingredient.amount}
        onChange={(event) =>
          handleUpdateIngredientPreProcess({ amount: event.target.value })
        }
      />
      <button
        className="btn btn--danger"
        onClick={() => handleDeleteIngredient(ingredient.id)}
      >
        &times;
      </button>
    </>
  );
}
