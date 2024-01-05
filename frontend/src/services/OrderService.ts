import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import IOrdersResponse from "../types/IOrdersResponse";

export const orderApi = createApi({
    reducerPath: 'orderApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api/dashboard',
        credentials: 'same-origin',
        headers: new Headers({"Authorization": `Bearer ${localStorage.getItem("jwt")}`})
    }),
    endpoints: (build) => ({
        getOrders: build.query<IOrdersResponse, void>({
            query: () => ({
                url: '/getOrders',
            })
        })
    })
});

export const {useGetOrdersQuery} = orderApi;
