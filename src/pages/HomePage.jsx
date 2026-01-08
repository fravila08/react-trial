import { useEffect } from "react";
import axios from "axios";
import PokemonCard from "../components/PokemonCard";
import PokemonForm from "../components/PokemonForm";
import { useOutletContext } from "react-router-dom";

const HomePage = () => {
  const {pokemonsData, addData, rmData, updateData} = useOutletContext()

  const addCard = async (name, event = null) => {
    event && event.preventDefault();
    try {
      let searchUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;
      let response = await axios.get(searchUrl);
      addData(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (pokemonsData.length === 0){
      addCard("Pikachu");
    }
  }, []);

  return (
    <>
      <div id="cardHolder">
        {pokemonsData.map((data) => (
          <PokemonCard key={data.id} data={data} rmData={rmData} updateData={updateData}/>
        ))}
      </div>
      <PokemonForm addCard={addCard} />
    </>
  );
}

export default HomePage;