import { configureStore, createSlice } from '@reduxjs/toolkit';
import { filterSlice } from './filterReducer';
import { contactsSlice } from './contactsReducer';
import authSLice from './authSlice';

import storage from 'redux-persist/lib/storage';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(
  authPersistConfig,
  authSLice.reducer
);

const isNavActiveSlice = createSlice({
  name: 'isNavActive',
  initialState: {
    isImgNavActive: false,
    isMovieNavActive: false,
    isPhonebookNavActive: false,
  },
  reducers: {
    changeImgNavStatus: state => {
      return {
        isImgNavActive: !state.isImgNavActive,
        isMovieNavActive: false,
        isPhonebookNavActive: false,
      };
    },
    changeMovieNavStatus: state => {
      return {
        isImgNavActive: false,
        isMovieNavActive: !state.isMovieNavActive,
        isPhonebookNavActive: false,
      };
    },
    changePhonebookNavStatus: state => {
      return {
        isImgNavActive: false,
        isMovieNavActive: false,
        isPhonebookNavActive: !state.isPhonebookNavActive,
      };
    },
    resetLinks: () => {
      return {
        isImgNavActive: false,
        isMovieNavActive: false,
        isPhonebookNavActive: false,
      };
    },
  },
});

export const {
  changeImgNavStatus,
  changeMovieNavStatus,
  changePhonebookNavStatus,
  resetLinks,
} = isNavActiveSlice.actions;

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
    isNavActive: isNavActiveSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
