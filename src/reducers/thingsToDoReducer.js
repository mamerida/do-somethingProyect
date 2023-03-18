import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    thinksOnScreen: null,
    somethingList: null,
}

const addSomethingToListRedux = ({ state, action }) => {
    console.log("hola");
}

const setSomethingToShowRedux = ({ state, action }) => {
    state.thinksOnScreen = action.payload
}

export const DoSomethingSlice = createSlice({
    name: 'somethigs',
    initialState: initialState,
    reducers: {
        setSomethingToShow: (state, action) => {
            addSomethingToListRedux({ state, action })
        },
        addSomethingToList: (state, action) => {
            setSomethingToShowRedux({ state, action })
        },
        clearStore: (state, action) => {
            state = initialState;
        },
    }
})

export const { setSomethingToShow, addSomethingToList, clearStore } = DoSomethingSlice.actions

export default DoSomethingSlice.reducer
