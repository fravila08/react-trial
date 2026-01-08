import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const PokemonDetailsPage = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  const fetchPokemon = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      setPokemon(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(()=>{
    fetchPokemon()
  }, [id])

  return (
    <>
      {
        pokemon ?
        <div>
          <h1>{pokemon.name}</h1>
          <img src={pokemon.sprites.front_default} />
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
        </div>
        :
        <p>Loading...</p>
      }
    </>
  );
};

export default PokemonDetailsPage;