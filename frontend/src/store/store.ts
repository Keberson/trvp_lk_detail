import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import {userApi} from "../services/UserService";
import authSlice from "./slices/authSlice";
import dashboardSlice from "./slices/dashboardSlice";
import {dashboardApi} from "../services/DashboardService";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        [userApi.reducerPath]: userApi.reducer,
        dashboard: dashboardSlice,
        [dashboardApi.reducerPath]: dashboardApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userApi.middleware).concat(dashboardApi.middleware)
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
