import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  selectTotalCount,
  selectPokemonList,
  setTotalCount,
  setPokemonList,
} from "../features/pokemonSlice";

const Body = () => {
  //use redux store
  const totalCount = useSelector(selectTotalCount);
  const pokemonList = useSelector(selectPokemonList);

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((response) => {
      dispatch(setTotalCount(response.data.count));
      dispatch(setPokemonList(response.data.results));

      setPokemonList(response.data.results);
    });
  }, [dispatch]);

  return (
    <div>
      <h2>
        Total Pokemon List:
        {totalCount}
      </h2>
      {pokemonList.map((pokemon) => (
        <h4>{pokemon.name}</h4>
      ))}
    </div>
  );
};

export default Body;
