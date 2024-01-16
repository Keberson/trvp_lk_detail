import {createSlice} from "@reduxjs/toolkit";
import {emptyOrder, IOrder} from "../../types/IOrder";
import moment from "moment";

export interface utilsState {
    isModalShow: boolean,
    modalTitle: 'Create Order' | 'Edit Order' | '',
    isLoadingShow: boolean,
    isErrorShow: boolean,
    errorText: string,
    utilOrder: IOrder,
    currentDate: string,
    prevOrdersState: IOrder[],
    isEdited: boolean
}

const initialState: utilsState = {
    isModalShow: false,
    modalTitle: '',
    isLoadingShow: false,
    isErrorShow: false,
    errorText: '',
    utilOrder: emptyOrder,
    currentDate: (new Date()).toLocaleDateString('ru'),
    prevOrdersState: [],
    isEdited: false
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
            state.utilOrder = payload.payload;
        },
        incrementDate: (state) => {
            const tmpDate = moment(state.currentDate, "DD.MM.YYYY").toDate();
            tmpDate.setDate(tmpDate.getDate() + 1);
            state.currentDate = tmpDate.toLocaleDateString('ru');
        },
        setPrevOrders: (state, payload) => {
            state.prevOrdersState = payload.payload;
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
