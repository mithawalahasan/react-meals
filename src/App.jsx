import { useContext } from "react";
import { useState } from "react";
import "./App.css";
import Favourite from "./components/Favourite";
import Meals from "./components/Meals";
import Modal from "./components/Modal";
import Search from "./components/Search";
import { Context } from "./MealsContext";
function App() {
  const { showModal, favourites } = useContext(Context);
  return (
    <main>
      <Search />
      {favourites.length > 0 && <Favourite />}

      <Meals />

      {showModal && <Modal />}
    </main>
  );
}

export default App;
