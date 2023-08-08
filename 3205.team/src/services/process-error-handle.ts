import {store} from '../store';
import {clearSearchResults, setError, setLoadingStatus} from '../store/action';
import {clearErrorAction} from './api-actions';

export const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(clearSearchResults());
  store.dispatch(setLoadingStatus(false));
  store.dispatch(clearErrorAction());
};