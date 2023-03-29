import { createSlice } from '@reduxjs/toolkit'

export const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    value: [],
    favorite: [],
    checkSearch: '',
    searchLoading: false,
  },
  
  reducers: {
    save: (state, action) => {
      state.value = action.payload;
    },

    addFavoriteState: (state, action) => {
      state.favorite = [...state.favorite, action.payload];
    },

    
    deleteFavoriteState: (state, action) => {
      state.favorite = state.favorite.filter((item) => item.imdbID !== action.payload)
    },

    clearFavoriteState: (state) => {
      state.favorite = [];
    },

    setCheckSearch: (state, action) => {
      state.checkSearch = action.payload;
    },

    setSearchLoading: (state, action) => {
      state.searchLoading = action.payload;
    },

  },
})

export const { save, addFavoriteState, deleteFavoriteState, clearFavoriteState, setCheckSearch, setSearchLoading,  } = movieSlice.actions

export default movieSlice.reducer