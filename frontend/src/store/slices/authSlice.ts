import {createSlice} from "@reduxjs/toolkit";
import {userApi} from "../../services/UserService";

export interface AuthState {
    isAuth: boolean,
}

const initialState: AuthState = {
    isAuth: localStorage.getItem("jwt") !== null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.isAuth = false;
            localStorage.removeItem("jwt");
        }
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(userApi.endpoints.login.matchFulfilled, (state, action) => {
                localStorage.setItem("jwt", action.payload.jwt);
                state.isAuth = true;
            })
            .addMatcher(userApi.endpoints.login.matchRejected, (state) => {
                state.isAuth = localStorage.getItem("jwt") !== null
            })

    }
})

export const {logout} = authSlice.actions;
export default authSlice.reducer;
