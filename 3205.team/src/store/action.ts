import {createAction} from '@reduxjs/toolkit';

export const setLoadingStatus = createAction<boolean>('setLoadingStatus');
export const setSearchResults = createAction<any>('setSearchResults');
