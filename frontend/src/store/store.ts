import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import {userApi} from "../services/UserService";
import authSlice from "./slices/authSlice";
import orderSlice from "./slices/orderSlice";
import {orderApi} from "../services/OrderService";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        [userApi.reducerPath]: userApi.reducer,
        order: orderSlice,
        [orderApi.reducerPath]: orderApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userApi.middleware).concat(orderApi.middleware)
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
