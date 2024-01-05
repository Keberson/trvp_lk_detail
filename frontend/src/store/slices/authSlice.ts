import {createSlice} from "@reduxjs/toolkit";
import {userApi} from "../../services/UserService";

export interface AuthState {
    isAuth: boolean,
}

const initialState: AuthState = {
    isAuth: localStorage.getItem("jwt") !== null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: () => {
            localStorage.removeItem("jwt");

            return initialState
        }
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(userApi.endpoints.login.matchFulfilled, (state, action) => {
                state.isAuth = true;
                localStorage.setItem("jwt", action.payload.jwt);
            })
            .addMatcher(userApi.endpoints.login.matchRejected, (state) => {
                state.isAuth = localStorage.getItem("jwt") != null
            })
    }
})

export const {logout} = authSlice.actions;
export default authSlice.reducer;
