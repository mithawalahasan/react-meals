import React, { useEffect, useState } from "react";
import { createContext } from "react";
import axios from "axios";
const Context = createContext();
const mealsurl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const randommeal = "https://www.themealdb.com/api/json/v1/1/random.php";
function favlocalstorage() {
  let fav = localStorage.getItem("favourites");
  if (fav) {
    fav = JSON.parse(localStorage.getItem("favourites"));
  } else {
    fav = [];
  }
  return fav;
}

function MealsContext(props) {
  const [meals, setmeals] = useState([]);
  const [loading, setloading] = useState(false);
  const [SearchTerm, setSearchTerm] = useState("");
  const [showModal, setshowModal] = useState(false);
  const [selectedmeal, setselectedmeal] = useState([]);
  const [favourites, setfavourites] = useState(favlocalstorage());
  const FetchData = async (url) => {
    setloading(true);
    const response = await axios
      .get(url)
      .then((res) => (res.data.meals ? setmeals(res.data.meals) : setmeals([])))
      .catch((err) => console.log(err));
    setloading(false);
  };
  useEffect(() => {
    FetchData(`${mealsurl}${SearchTerm}`);
  }, []); // if the application loads first time then fetch all the  meals becuase in second useffect only useffect will run when  searchterm changes so at intial render we are fetching all the meals
  useEffect(() => {
    if (!SearchTerm) return;
    FetchData(`${mealsurl}${SearchTerm}`);
  }, [SearchTerm]);
  function randomMeal() {
    FetchData(randommeal);
  }
  function selectMeal(mealid, favouriteMeal) {
    setshowModal(true);
    let mealss;
    if (favouriteMeal) {
      mealss = favourites.find((meal) => meal.idMeal === mealid);
    } else {
      mealss = meals.find((meal) => meal.idMeal === mealid);
    }
    setselectedmeal(mealss);
  }
  function closemodal() {
    setshowModal(false);
  }
  function addtofavourites(idmeal) {
    const mealsss = meals.find((meal) => meal.idMeal === idmeal);
    const alreadyfav = favourites.find((fav) => fav.idMeal === idmeal);
    if (alreadyfav) return;
    const array = [...favourites, mealsss];
    setfavourites(array);
    localStorage.setItem("favourites", JSON.stringify(array));
  }
  function removefromfav(idmeal) {
    const array = favourites.filter((fav) => fav.idMeal !== idmeal);
    setfavourites(array);
    localStorage.setItem("favourites", JSON.stringify(array));
  }

  return (
    <Context.Provider
      value={{
        meals,
        loading,
        setSearchTerm,
        randomMeal,
        showModal,
        selectMeal,
        selectedmeal,
        closemodal,
        addtofavourites,
        removefromfav,
        favourites,
        FetchData,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { MealsContext as Provider, Context };
