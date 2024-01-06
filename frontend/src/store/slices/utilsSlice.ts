import {createSlice} from "@reduxjs/toolkit";
import {emptyOrder, IOrder} from "../../types/IOrder";

export interface utilsState {
    isModalShow: boolean,
    modalTitle: 'Create Order' | 'Edit Order' | '',
    isLoadingShow: boolean,
    isErrorShow: boolean,
    errorText: string,
    utilOrder: IOrder,
    currentDate: Date,
}

const initialState: utilsState = {
    isModalShow: false,
    modalTitle: '',
    isLoadingShow: false,
    isErrorShow: false,
    errorText: '',
    utilOrder: emptyOrder,
    currentDate: new Date()
}

export const utilsSlice = createSlice({
    name: 'utils',
    initialState,
    reducers: {
        toggleModal: (state) => {
            state.isModalShow = !state.isModalShow;
        },
        setModalTitle: (state, payload) => {
            state.modalTitle = payload.payload;
        },
        toggleLoading: (state) => {
            state.isLoadingShow = !state.isLoadingShow;
        },
        showError: (state, payload) => {
            state.isErrorShow = true;
            state.errorText = payload.payload;
        },
        clearError: (state) => {
            state.isErrorShow = false;
            state.errorText = '';
        },
        setUtilOrder: (state, payload) => {
            state.utilOrder = payload.payload
        },
        incrementDate: (state) => {
            state.currentDate.setDate(state.currentDate.getDate() + 1);
        }
    },
})

export const {
    toggleModal,
    setModalTitle,
    toggleLoading,
    showError,
    clearError,
    setUtilOrder,
    incrementDate
} = utilsSlice.actions;
export default utilsSlice.reducer;
