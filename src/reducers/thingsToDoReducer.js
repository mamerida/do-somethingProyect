import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    thinksOnScreen: {},
    somethingList: []
}

const addSomethingToListRedux = ({ state, action }) => {
    console.log("hola");
}

const setSomethingToShowRedux = ({ state, action }) => {
    console.log("adios")
}

export const DoSomethingSlice = createSlice({
    name: 'characterList',
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
