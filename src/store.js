export const initialStore = () => ({
  message: null,
  favorites: []
});

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'toggle_favorite':
      const exists = store.favorites.some(
        fav => fav.uid === action.payload.uid && fav.category === action.payload.category
      );
      return {
        ...store,
        favorites: exists
          ? store.favorites.filter(
              fav => !(fav.uid === action.payload.uid && fav.category === action.payload.category)
            )
          : [...store.favorites, action.payload]
      };
    default:
      throw new Error('Unknown action.');
  }
}

