export default function reducer(favourites, action) {
  switch (action.type) {
    case "add":
      return [...favourites, action.payload];

    case "remove":
      return favourites.filter((movieId) => !(movieId === action.payload));

    default:
      return favourites;
  }
}
