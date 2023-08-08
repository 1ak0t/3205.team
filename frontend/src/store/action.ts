import {createAction} from '@reduxjs/toolkit';

export const setLoadingStatus = createAction<boolean>('setLoadingStatus');
export const setSearchResults = createAction<any>('setSearchResults');
export const clearSearchResults = createAction('clearSearchResults');
export const setError = createAction<string | null>('setError');
export const clearError = createAction<string | null>('clearError');
