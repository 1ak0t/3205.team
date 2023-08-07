import {createReducer} from '@reduxjs/toolkit';
import {setLoadingStatus, setSearchResults} from './action';

type initialStateType = {
  isLoading: boolean;
  searchResults: any;
}
const initialState =
    {
      isLoading: false,
      searchResults: []
    };

const reducer = createReducer(initialState, (builder) => {
  builder
      .addCase(setLoadingStatus, (state, action) => {
        state.isLoading = action.payload;
      })
      .addCase(setSearchResults, (state, action) => {
        state.searchResults = action.payload;
      })
});

export {reducer};
