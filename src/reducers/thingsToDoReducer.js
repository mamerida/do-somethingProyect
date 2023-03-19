import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    thinksOnScreen: null,
    somethingList: null,
}

const addSomethingToListRedux = ({ state, action }) => {
    if (!state.somethingList) {
        state.somethingList = [action.payload]
        return
    }

    let repiteElement = state.somethingList.some(activity => {
        let act = current(activity)
        return act.key == action.payload.key
    })

    if (!repiteElement) {
        state.somethingList.push(action.payload)
    }

}

const setSomethingToShowRedux = ({ state, action }) => {
    state.thinksOnScreen = action.payload
}

export const DoSomethingSlice = createSlice({
    name: 'somethigs',
    initialState: initialState,
    reducers: {
        setSomethingToShow: (state, action) => {
            setSomethingToShowRedux({ state, action })
        },
        addSomethingToList: (state, action) => {
            addSomethingToListRedux({ state, action })
        },
        clearStore: (state, action) => {
            state = initialState;
        },
    }
})

export const { setSomethingToShow, addSomethingToList, clearStore } = DoSomethingSlice.actions

export default DoSomethingSlice.reducer
