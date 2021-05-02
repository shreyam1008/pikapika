import { configureStore } from "@reduxjs/toolkit";

import pokemonReducer from "../features/pokemonSlice";
import uiReducer from "../features/uiSlice";

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    ui: uiReducer,
  },
});
