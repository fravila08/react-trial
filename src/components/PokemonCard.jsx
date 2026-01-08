import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PokemonCard({ data, rmData, updateData }) {
  const [shiny, setShiny] = useState(data.shiny ? data.shiny : false);
  const navigate = useNavigate();

  const handleShine = () => {
    updateData(data, !shiny)
    setShiny(!shiny)
  }


  return (
    <div className="pokeCard">
      <h2>{data.name}</h2>
      <img
        src={
          shiny
            ? data.sprites.front_shiny
            : data.sprites.front_default
        }
      />
      <button onClick={handleShine}>
        {shiny ? "un-shine" : "shine"}
      </button>

      <button onClick={() => navigate(`/pokemon/${data.id}`)}>
        See Details
      </button>
      <button onClick={()=>rmData(data)}>
        Remove
      </button>
    </div>
  );
}

export default PokemonCard;