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
    reducers: {
        reorderRows: (state, payload) => {
            const {orderID, fromIndex, toIndex} = payload.payload;
            const orderSelected = state.orders.find((order) => order.id === orderID);

            if (orderSelected) {
                const currentRowsOrder = orderSelected.rows;
                const [removedRow] = currentRowsOrder.splice(fromIndex, 1);
                currentRowsOrder.splice(toIndex, 0, removedRow);
            }
        },
        moveRow: (state, payload) => {
            const {fromOrder, toOrder, fromIndex, toIndex} = payload.payload;
            const fromOrderSelected = state.orders.find((order) => order.id === fromOrder);
            const toOrderSelected = state.orders.find((order) => order.id === toOrder);

            if (fromOrderSelected && toOrderSelected) {
                const fromOrderRows = fromOrderSelected.rows;
                const toOrderRows = toOrderSelected.rows;
                const [removedRow] = fromOrderRows.splice(fromIndex, 1);
                toOrderRows.splice(toIndex, 0, removedRow);
            }
        }
    },
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

export const {
    reorderRows,
    moveRow
} = dashboardSlice.actions;
export default dashboardSlice.reducer;
