import { createContext } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteIds, setFavoriteIds] = useState([]);

  const addFavorite = (id) => {
    setFavoriteIds((prev) => [...prev, id]);
  };

  const removeFavorite = (id) => {
    setFavoriteIds((prev) => prev.filter((favId) => favId !== id));
  };

  return (
    <FavoritesContext.Provider
      value={{ ids: favoriteIds, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
