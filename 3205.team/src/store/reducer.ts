import {createReducer} from '@reduxjs/toolkit';
import {setLoadingStatus} from './action';

type initialStateType = {
  isLoading: boolean;
}
const initialState =
    {
      isLoading: false,
    };

const reducer = createReducer(initialState, (builder) => {
  builder
      .addCase(setLoadingStatus, (state, action) => {
        state.isLoading = action.payload;
      })
});

export {reducer};
