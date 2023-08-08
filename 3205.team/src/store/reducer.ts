import {createReducer} from '@reduxjs/toolkit';
import {clearError, clearSearchResults, setError, setLoadingStatus, setSearchResults} from './action';
import {SearchData} from '../types/search-data';

type initialStateType = {
  isLoading: boolean;
  searchResults: SearchData[];
  error: string | null;
}
const initialState: initialStateType =
    {
      isLoading: false,
      searchResults: [],
      error: null,
    };

const reducer = createReducer(initialState, (builder) => {
  builder
      .addCase(setLoadingStatus, (state, action) => {
        state.isLoading = action.payload;
      })
      .addCase(setSearchResults, (state, action) => {
        state.searchResults = action.payload;
      })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(clearError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(clearSearchResults, (state) => {
      state.searchResults = [];
    })
});

export {reducer};
