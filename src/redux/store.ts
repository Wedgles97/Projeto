import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { authenticationApi } from '../api/authentication/authentication.api';
import { pokemonApi } from '../api/pokemon/pokemon.api';
import counterReducer from '../redux/counter/counter.slice';
import authenticationReducer from '../redux/authentication/authentication.slice';

export const store = configureStore({
  reducer: {
    [authenticationApi.reducerPath]: authenticationApi.reducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    counter: counterReducer,
    authentication: authenticationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;