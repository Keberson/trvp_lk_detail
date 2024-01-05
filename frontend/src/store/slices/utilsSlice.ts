import {createSlice} from "@reduxjs/toolkit";

export interface utilsState {
    isModalShow: boolean,
    isLoadingShow: boolean,
    isErrorShow: boolean,
    errorText: string
}

const initialState: utilsState = {
    isModalShow: false,
    isLoadingShow: false,
    isErrorShow: false,
    errorText: ''
}

export const utilsSlice = createSlice({
    name: 'utils',
    initialState,
    reducers: {
        toggleModal: (state) => {
            state.isModalShow = !state.isModalShow;
        },
        toggleLoading: (state) => {
            console.log(state.isLoadingShow)
            state.isLoadingShow = !state.isLoadingShow;
        },
        showError: (state, payload) => {
            state.isErrorShow = true;
            console.log(payload);
            state.errorText = payload.payload;
        },
        clearError: (state) => {
            state.isErrorShow = false;
            state.errorText = '';
        }
    },
})

export const {
    toggleModal,
    toggleLoading,
    showError,
    clearError
} = utilsSlice.actions;
export default utilsSlice.reducer;
