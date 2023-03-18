import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Context } from "../MealsContext";

function Search() {
  const { setSearchTerm, randomMeal } = useContext(Context);
  const [Text, setText] = useState("");
  function handleChange(event) {
    setText((event.target.name = event.target.value));
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (Text) {
      setSearchTerm(Text);
      setText("");
    }
  }
  function handleRandomMeal() {
    setText("");
    setSearchTerm("");
    randomMeal();
  }

  return (
    <header className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type your favorite meal"
          className="form-input"
          value={Text}
          onChange={handleChange}
        />
        <button type="submit" className="btn">
          Search
        </button>
        <button
          onClick={handleRandomMeal}
          type="button"
          className="btn btn-hipster"
        >
          Surprise me!
        </button>
        <button className="backtomeals">Back to All Meals</button>
      </form>
    </header>
  );
}

export default Search;
