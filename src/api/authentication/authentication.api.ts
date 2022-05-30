import { createApi } from '@reduxjs/toolkit/query/react';

import { LoginRequest, UserResponse } from './types';

// eslint-disable-next-line import/extensions
import { axiosBaseQuery } from '../../utils/http.helper';

export const authenticationApi = createApi({
  baseQuery: axiosBaseQuery({ baseUrl: '/' }),
  endpoints: builder => ({
    login: builder.mutation<UserResponse, LoginRequest>({
      query: credentials => ({
        url: 'login',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation } = authenticationApi;
