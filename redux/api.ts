import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const Api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.fullstats.ru/api/v1/'}),
    endpoints: (build) => ({
        login: build.mutation({
            query: body => ({
                url: 'auth/login/',
                method: 'POST',
                body
            })
        }),
        registration: build.mutation({
            query: body => ({
                url: 'signup/user/',
                method: 'POST',
                body
            })
        }),
        getUsername: build.mutation({
            query: body => ({
                url: 'token-refresh/',
                method: 'POST',
                body
            })
        }),
    })
})

export const {useLoginMutation, useRegistrationMutation, useGetUsernameMutation} = Api