import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const Api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.fullstats.ru/api/v1/'}),
    endpoints: (build) => ({

    })
})

export const {} = Api