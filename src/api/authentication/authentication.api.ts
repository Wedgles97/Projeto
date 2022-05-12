import { createApi } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery } from '../../utils/http.helper'
import { LoginRequest, UserResponse } from './types'

export const authenticationApi = createApi({
  baseQuery: axiosBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({
    login: builder.mutation<UserResponse, LoginRequest>({
      query: (credentials) => ({
        url: 'login',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
})

export const { useLoginMutation } = authenticationApi
