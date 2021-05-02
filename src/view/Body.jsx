import React, { useState, useEffect } from "react";
import axios from "axios";
const Body = () => {
  //use redux store
  const [pokemonCount, setPokemonCount] = useState(0);
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((response) => {
      setPokemonCount(response.data.count);
      setPokemonList(response.data.results);
    });
  }, []);

  return (
    <div>
      <h2>
        Total Pokemon List:
        {pokemonCount}
      </h2>
      {pokemonList.map((pokemon) => (
        <h4>{pokemon.name}</h4>
      ))}
    </div>
  );
};

export default Body;
