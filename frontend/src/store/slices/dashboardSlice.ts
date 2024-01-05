import {createSlice} from "@reduxjs/toolkit";
import {dashboardApi} from "../../services/DashboardService";
import {IOrder} from "../../types/IOrder";
import {IProduct} from "../../types/IProduct";

export interface dashboardState {
    orders: IOrder[],
    products: IProduct[]
}

const initialState: dashboardState = {
    orders: [],
    products: []
}

export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addMatcher(dashboardApi.endpoints.getOrders.matchFulfilled, (state, action) => {
                state.orders = action.payload.result.map((order) => ({
                    ...order,
                    order_date: new Date(order.order_date)
                }));
            })
            .addMatcher(dashboardApi.endpoints.getOrders.matchRejected, (state, action) => {
                state.orders = [];
            })
            .addMatcher(dashboardApi.endpoints.getProducts.matchFulfilled, (state, action) => {
                state.products = action.payload.result;
            })
            .addMatcher(dashboardApi.endpoints.getProducts.matchRejected, (state, action) => {
                state.products = [];
            })
    }
})

export default dashboardSlice.reducer;
