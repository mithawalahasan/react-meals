import React from "react";
import { useContext } from "react";
import { Context } from "../MealsContext";

function Modal() {
  const { selectedmeal, closemodal } = useContext(Context);
  return (
    <aside className="modal-overlay">
      <div className="modal-container">
        <img
          src={selectedmeal.strMealThumb}
          alt={selectedmeal.strMeal}
          className="img modal-img"
        />
        <div className="modal-content">
          <h4>{selectedmeal.strMeal}</h4>
          <p>Cooking Instructions</p>

          <p>{selectedmeal.strInstructions}</p>
          <a href={selectedmeal.strSource} target="_blank">
            Original Source
          </a>
          <button className="btn btn-hipster close-btn" onClick={closemodal}>
            Close
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Modal;
