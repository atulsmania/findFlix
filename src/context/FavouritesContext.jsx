import React, { useReducer } from "react";
import reducer from "../reducer";

export const FavouritesContext = React.createContext({});

export default function FavouritesContextProvider({ children }) {
  const [favourites, dispatch] = useReducer(reducer, []);

  return (
    <FavouritesContext.Provider value={[favourites, dispatch]}>
      {children}
    </FavouritesContext.Provider>
  );
}
