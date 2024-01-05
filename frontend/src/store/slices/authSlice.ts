import {createSlice} from "@reduxjs/toolkit";
import {userApi} from "../../services/UserService";

export interface AuthState {
    token: string,
    isAuth: boolean,
}

const initialState: AuthState = {
    token: '',
    isAuth: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: () => initialState
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(userApi.endpoints.login.matchFulfilled, (state, action) => {
                state.token = action.payload.jwt;
                state.isAuth = true;
            })
            .addMatcher(userApi.endpoints.login.matchRejected, () => {
                logout();
            })
    }
})

export const {logout} = authSlice.actions;
export default authSlice.reducer;
export type LoginError = {
    data: {
        message: string,
    }
};
