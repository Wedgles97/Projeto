import { createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line import/extensions
import { authenticationApi } from '../../api/authentication/authentication.api';
import type { RootState } from '../../redux/store';
import type { User } from './types';

type AuthState = {
  user: User | null;
  token: string | null;
};

const slice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null } as AuthState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(
      authenticationApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
      },
    );
  },
});

export default slice.reducer;

export const selectCurrentUser = (state: RootState) =>
  state.authentication.user;
