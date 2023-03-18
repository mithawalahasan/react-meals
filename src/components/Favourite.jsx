import React from "react";
import { useContext } from "react";
import { Context } from "../MealsContext";

function Favourite() {
  const { favourites, selectMeal, removefromfav } = useContext(Context);
  return (
    <section className="favourites">
      <div className="favourites-content">
        <h3>Favourites</h3>
        <div className="favourites-container">
          {favourites.map((fav) => {
            return (
              <div key={fav.idMeal} className="favourite-item">
                <img
                  src={fav.strMealThumb}
                  className="favorites-img img"
                  onClick={() => selectMeal(fav.idMeal, true)}
                />
                <button
                  className="remove-btn"
                  onClick={() => removefromfav(fav.idMeal)}
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Favourite;
