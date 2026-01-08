import { useState } from "react";

const PokemonForm = ({addCard}) => {
  const [pokemonName, setPokemonName] = useState('');

  return (
    <form onSubmit={(event) => [addCard(pokemonName, event), setPokemonName('')]}>
        <input
          name="pokemonName"
          type="text"
          placeholder="Pokemon Name"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
        />
        <button type="submit">Add Card</button>
      </form>
  )
}

export default PokemonForm;