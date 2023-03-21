/* eslint-disable testing-library/no-render-in-setup */
import HomePageComponent from "../../HomePageComponent/HomePageComponent";
import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from "../../app/store";
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import { createStorare, registerUser } from '../../utils/localHost';
import { setSomethingToShow } from "../../reducers/thingsToDoReducer";



describe("test to Menu Component", () => {
    let user;
    let renderInstance;
    const act1 = {
        "activity": "Go for a walk",
        "type": "relaxation",
        "participants": 1,
        "price": 0,
        "link": "",
        "key": "4286250",
        "accessibility": 0.1
    }

    let usersRegistereds = {
        email: "john.dee@someemail.com",
        name: "Johnnnn",
        lastName: "Deeeee",
        age: "27",
        password: "Ma123434534!",
        passwordRepeat: "Ma123434534!",
    }

    beforeEach(() => {
        registerUser(usersRegistereds)
        renderInstance = render(<BrowserRouter><Provider store={store}><HomePageComponent /></Provider></BrowserRouter>)
        user = userEvent.setup()
        act(() => {
            store.dispatch(setSomethingToShow(act1))
        })
    })

    afterEach(() => {
        jest.clearAllMocks();
        createStorare();
    })

    it("renderComponent", () => {
        expect(renderInstance).toBeTruthy();
    })

    it("see activity card", async () => {
        expect(screen.getByText("Go for a walk")).toBeInTheDocument()
    })

    it("press Activity card", async () => {
        await user.click(screen.getByText("Add To Your List"))
        await waitFor(() => {
            expect(store.getState().something.somethingList.length).toBe(1)
        })
    })

    it("press Other activity", async () => {
        await user.click(screen.getByText("Other Activity"))
        await waitFor(() => {
            expect(screen.getByTestId("activity_name") !== act1.activity).toBe(true)
        })
    })
})