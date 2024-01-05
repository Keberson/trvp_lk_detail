import {createSlice} from "@reduxjs/toolkit";
import {orderApi} from "../../services/OrderService";
import {IOrder} from "../../types/IOrder";

export interface ordersState {
    orders: IOrder[]
}

const initialState: ordersState = {
    orders: []
}

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addMatcher(orderApi.endpoints.getOrders.matchFulfilled, (state, action) => {
                state.orders = action.payload.result.map((order) => ({
                    ...order,
                    order_date: new Date(order.order_date)
                }));
            })
            .addMatcher(orderApi.endpoints.getOrders.matchRejected, (state, action) => {
                state.orders = [];
            })
    }
})

export default orderSlice.reducer;
