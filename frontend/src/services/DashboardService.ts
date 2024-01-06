import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import IFormCreate from "../types/IFormCreate";
import IOrdersResponse from "../types/IOrdersResponse";
import IProductResponse from "../types/IProductResponse";
import IResponse from "../types/IResponse";
import {IOrderEdit} from "../types/IOrderEdit";

// @ts-ignore
export const dashboardApi = createApi({
    reducerPath: 'dashboardApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api/dashboard',
        credentials: 'same-origin',
        headers: new Headers({"Authorization": `Bearer ${localStorage.getItem("jwt")}`})
    }),
    tagTypes: ['Post'],
    endpoints: (build) => ({
        getOrders: build.query<IOrdersResponse, void>({
            query: () => ({
                url: '/getOrders',
            }),
            providesTags: ['Post']
        }),
        getProducts: build.query<IProductResponse, void>({
            query: () => ({
                url: '/getProducts'
            })
        }),
        createOrder: build.mutation<IResponse, IFormCreate>( {
            query: (body) => ({
                url: '/createOrder',
                method: 'POST',
                body: body
            }),
            invalidatesTags: () => ['Post']
        }),
        editOrder: build.mutation<IResponse, IOrderEdit>({
            query: (body) => ({
                url: '/editOrder',
                method: 'PATCH',
                body: body
            }),
            invalidatesTags: () => ['Post']
        }),
        deleteOrder: build.mutation<IResponse, string>( {
            query: (id) => ({
                url: `/deleteOrder/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: () => ['Post']
        }),
        expiredOrders: build.mutation<IResponse, string>( {
            query: (data) => ({
                url: `/expiredOrders/${data}`,
                method: 'POST',
            }),
            invalidatesTags: () => ['Post']
        }),
        simulate: build.mutation<IResponse, void>( {
            query: () => ({
                url: `/simulate`,
                method: 'POST',
            }),
            invalidatesTags: () => ['Post']
        }),
    })
});

export const {
    useGetOrdersQuery,
    useGetProductsQuery,
    useCreateOrderMutation,
    useEditOrderMutation,
    useDeleteOrderMutation,
    useExpiredOrdersMutation,
    useSimulateMutation
} = dashboardApi;
