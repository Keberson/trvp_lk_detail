import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import IFormCreate from "../types/IFormCreate";
import IOrdersResponse from "../types/IOrdersResponse";
import IProductResponse from "../types/IProductResponse";
import IResponse from "../types/IResponse";
import {IOrderEdit} from "../types/IOrderEdit";
import IRowsEdit from "../types/IRowsEdit";

export const dashboardApi = createApi({
    reducerPath: 'dashboardApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `http://localhost:5000/api/dashboard`,
        credentials: 'same-origin',
        prepareHeaders(headers) {
            return headers.set("Authorization", `Bearer ${localStorage.getItem("jwt")}`)
        }
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
            }),
            providesTags: ['Post']
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
        editRows: build.mutation<IResponse, IRowsEdit[]>({
            query: (body) => ({
                url: '/editRows',
                method: 'PATCH',
                body: body
            }),
            invalidatesTags: () => ['Post']
        }),
        deleteOrder: build.mutation<IResponse, number>( {
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
    useEditRowsMutation,
    useDeleteOrderMutation,
    useExpiredOrdersMutation,
    useSimulateMutation
} = dashboardApi;
