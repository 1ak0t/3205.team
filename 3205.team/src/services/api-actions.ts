import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import {AxiosInstance} from 'axios';
import {SearchData} from '../types/search-data';
import {setLoadingStatus, setSearchResults} from '../store/action';

export const fetchSearchResults = createAsyncThunk<void, SearchData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
    'setSearchResults',
    async ({email, number}, {dispatch, extra: api}) => {
      const {data} = await api.post<SearchData>('', {email, number});
      dispatch(setSearchResults(data));
      dispatch(setLoadingStatus(false));
    },
);
