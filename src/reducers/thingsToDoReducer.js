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

const deleteActivityFromList = ({ state, action }) => {
    state.somethingList = state.somethingList.filter(activity => activity.key !== action.payload.key)
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
        deleteElementFromStorage: (state, action) => {
            deleteActivityFromList({ state, action })
        },
        clearStore: (state, action) => {
            state.somethingList = null
            state.thinksOnScreen = null
        },
    }
})

export const { setSomethingToShow, deleteElementFromStorage, addSomethingToList, clearStore } = DoSomethingSlice.actions

export default DoSomethingSlice.reducer
