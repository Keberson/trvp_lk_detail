import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import IUser from "../types/IUser";
import ILoginResponse from "../types/ILoginResponse";

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api/login',
        credentials: 'same-origin'
    }),
    endpoints: (build) => ({
        login: build.mutation<ILoginResponse, IUser>({
            query: (body) => ({
                url: '/',
                method: 'POST',
                body
            })
        })
    })
});

export const {useLoginMutation} = userApi;
