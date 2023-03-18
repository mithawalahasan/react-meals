import React from "react";
import { useContext } from "react";
import { Context } from "../MealsContext";
import { BsHandThumbsUp } from "react-icons/bs";

function Meals() {
  const { meals, loading, selectMeal, addtofavourites } = useContext(Context);
  if (loading) {
    return (
      <section className="section-center">
        <h1>Loading...</h1>
      </section>
    );
  }
  if (meals.length < 1) {
    return (
      <section className="section">
        <h4>no meals matched your search item.Please Try Again</h4>
      </section>
    );
  }
  return (
    <section className="section-center">
      {meals.map((meal) => {
        return (
          <article key={meal.idMeal} className="single-meal">
            <img
              src={meal.strMealThumb}
              onClick={() => selectMeal(meal.idMeal)}
              alt="meal-images"
              className="img"
            />
            <footer>
              <h5>{meal.strMeal}</h5>
              <button
                onClick={() => addtofavourites(meal.idMeal)}
                className="like-btn"
              >
                <BsHandThumbsUp />
              </button>
            </footer>
          </article>
        );
      })}
    </section>
  );
}

export default Meals;
