import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalCount: 0,
  pokemonList: [],
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  //reducers for setting things to the store
  reducers: {
    setTotalCount: (state, action) => {
      state.totalCount = action.payload;
    },
    setPokemonList: (state, action) => {
      state.pokemonList = action.payload;
    },
    //template
    setSomething: (state, action) => {
      state.something = action.payload.something;
    },
  },
});

//export these to set values
export const {
  setSomething,
  setTotalCount,
  setPokemonList,
} = pokemonSlice.actions;

//for selecting the items in store
export const selectSomething = (state) => state.pokemon.something;
export const selectPokemonList = (state) => state.pokemon.pokemonList;
export const selectTotalCount = (state) => state.pokemon.totalCount;

export default pokemonSlice.reducer;
