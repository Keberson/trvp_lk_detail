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
                state.orders = action.payload.result;
            })
            .addMatcher(dashboardApi.endpoints.getOrders.matchRejected, (state, action) => {
                if (action.payload && action.payload.status === 401) {
                    localStorage.removeItem("jwt");
                }
            })
            .addMatcher(dashboardApi.endpoints.getProducts.matchFulfilled, (state, action) => {
                state.products = action.payload.result;
            })
            .addMatcher(dashboardApi.endpoints.getProducts.matchRejected, (state, action) => {
                if (action.payload && action.payload.status === 401) {
                    localStorage.removeItem("jwt");
                }
            })
            .addMatcher(dashboardApi.endpoints.createOrder.matchRejected, (state, action) => {
                if (action.payload && action.payload.status === 401) {
                    localStorage.removeItem("jwt");
                }
            })
            .addMatcher(dashboardApi.endpoints.editOrder.matchRejected, (state, action) => {
                if (action.payload && action.payload.status === 401) {
                    localStorage.removeItem("jwt");
                }
            })
            .addMatcher(dashboardApi.endpoints.deleteOrder.matchRejected, (state, action) => {
                if (action.payload && action.payload.status === 401) {
                    localStorage.removeItem("jwt");
                }
            })
    }
})

export default dashboardSlice.reducer;
