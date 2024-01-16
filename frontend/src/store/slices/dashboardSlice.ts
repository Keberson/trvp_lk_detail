import {createSlice} from "@reduxjs/toolkit";
import {dashboardApi} from "../../services/DashboardService";
import {IOrder} from "../../types/IOrder";
import {IProduct} from "../../types/IProduct";
import IRowsEdit from "../../types/IRowsEdit";

export interface dashboardState {
    orders: IOrder[],
    products: IProduct[],
    error: string | undefined,
    rowsEdit: IRowsEdit[],
    isEditedOrders: boolean
}

const initialState: dashboardState = {
    orders: [],
    products: [],
    error: undefined,
    rowsEdit: [],
    isEditedOrders: false
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

                const row = state.rowsEdit.find(val => val.rowID === removedRow.id);

                if (!row) {
                    state.rowsEdit.push({
                        rowID: removedRow.id,
                        fromOrder: fromOrder,
                        toOrder: toOrder,
                    });
                } else {
                    const index = state.rowsEdit.indexOf(row);

                    if (row.toOrder === fromOrder) {
                        state.rowsEdit.splice(index, 1);
                    } else {
                        row.toOrder = toOrder;
                    }
                }

                state.isEditedOrders = state.rowsEdit.length !== 0;
            }
        },
        resetOrders: (state) => {
            for (const element of state.rowsEdit) {
                const orderTo = state.orders.find(el => el.id === element.toOrder);
                const orderFrom = state.orders.find(el => el.id === element.fromOrder);
                const orderRows = orderTo?.rows;
                const row = orderRows?.find(el => el.id === element.rowID);

                if (orderTo && orderRows && orderFrom && row) {
                    const index = orderRows.indexOf(row);

                    orderFrom.rows.push(row);
                    orderRows.splice(index, 1);
                }
            }

            state.rowsEdit = [];
            state.isEditedOrders = false;
        },
        saveOrders: (state) => {
            state.isEditedOrders = false;
            state.rowsEdit = [];
        }
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(dashboardApi.endpoints.getOrders.matchFulfilled, (state, action) => {
                state.orders = action.payload.result;
                state.error = undefined;
            })
            .addMatcher(dashboardApi.endpoints.getOrders.matchRejected, (state, action) => {
                if (action.payload && action.payload.status === 401) {
                    state.error = 'Unauthorized';
                }
            })
            .addMatcher(dashboardApi.endpoints.getProducts.matchFulfilled, (state, action) => {
                state.products = action.payload.result;
                state.error = undefined;
            })
            .addMatcher(dashboardApi.endpoints.getProducts.matchRejected, (state, action) => {
                if (action.payload && action.payload.status === 401) {
                    state.error = 'Unauthorized';
                }
            })
            .addMatcher(dashboardApi.endpoints.createOrder.matchRejected, (state, action) => {
                if (action.payload && action.payload.status === 401) {
                    state.error = 'Unauthorized';
                }
            })
            .addMatcher(dashboardApi.endpoints.editOrder.matchRejected, (state, action) => {
                if (action.payload && action.payload.status === 401) {
                    state.error = 'Unauthorized';
                }
            })
            .addMatcher(dashboardApi.endpoints.deleteOrder.matchRejected, (state, action) => {
                if (action.payload && action.payload.status === 401) {
                    state.error = 'Unauthorized';
                }
            })
            .addMatcher(dashboardApi.endpoints.simulate.matchRejected, (state, action) => {
                if (action.payload && action.payload.status === 401) {
                    state.error = 'Unauthorized';
                }
            })
            .addMatcher(dashboardApi.endpoints.expiredOrders.matchRejected, (state, action) => {
                if (action.payload && action.payload.status === 401) {
                    state.error = 'Unauthorized';
                }
            })
            .addMatcher(dashboardApi.endpoints.editRows.matchRejected, (state, action) => {
                if (action.payload && action.payload.status === 401) {
                    state.error = 'Unauthorized';
                }
            })
    }
})

export const {
    reorderRows,
    moveRow,
    resetOrders,
    saveOrders
} = dashboardSlice.actions;
export default dashboardSlice.reducer;
