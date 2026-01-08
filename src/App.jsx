import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./App.css";

function App() {
  const [pokemonsData, setPokemonsData] = useState([]);

  const addData = (data) => {
    setPokemonsData([...pokemonsData, data]);
  };

  const updateData = (data, shiny) => {
    setPokemonsData(
      pokemonsData.map((pokemon) =>
        pokemon.id === data.id ? { ...pokemon, shiny: shiny } : pokemon
      )
    );
  };

  const rmData = (data) => {
    setPokemonsData(pokemonsData.filter((prevData) => prevData.id !== data.id));
  };

  return (
    <>
      <h1>Pokemon Cards</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      {/* Pass state and functions down via Outlet context */}
      <Outlet context={{ pokemonsData, addData, rmData, updateData }} />
    </>
  );
}

export default App;
