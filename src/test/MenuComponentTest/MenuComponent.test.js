/* eslint-disable testing-library/no-render-in-setup */
import MenuComponent from "../../MenuComponent/MenuComponent";
import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from "../../app/store";
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import { createStorare, registerUser, IsUserLoged } from '../../utils/localHost';
import { setSomethingToShow, addSomethingToList } from "../../reducers/thingsToDoReducer";



describe("test to Menu Component", () => {
    let user;
    let renderInstance;
    let newUser = {
        email: "john.dee@someemail.com",
        password: "Ma123434534!"
    }
    const initialState = {
        thinksOnScreen: null,
        somethingList: null,
    }
    beforeEach(() => {
        renderInstance = render(<BrowserRouter><Provider store={store}><MenuComponent /></Provider></BrowserRouter>)
        user = userEvent.setup()
        registerUser(newUser)
    })

    it("renderComponent", () => {
        expect(renderInstance).toBeTruthy();
    })

    afterEach(() => {
        jest.clearAllMocks();
        createStorare();
    })

    it("appear titles and buttons", async () => {
        expect(screen.getByText("Do Something")).toBeInTheDocument()
        expect(screen.getByText("Activities to do")).toBeInTheDocument()
        expect(screen.getByText("LogOut")).toBeInTheDocument()
    })

    it("logout clear storage", async () => {
        await user.click(screen.getByText("LogOut"))
        await waitFor(() => {
            expect(IsUserLoged()).toEqual(false)
        })
    })

    it("logout change url", async () => {
        await user.click(screen.getByText("LogOut"))
        await waitFor(() => {
            expect(global.window.location.pathname).toContain('/login');
        })
    })

    it("Do Something change url", async () => {
        await user.click(screen.getByText("Activities to do"))
        await user.click(screen.getByText("Do Something"))
        await waitFor(() => {
            expect(global.window.location.pathname).toContain('/');
        })
    })

    it("Activities to do change url", async () => {
        await user.click(screen.getByText("Activities to do"))
        await waitFor(() => {
            expect(global.window.location.pathname).toContain('/activitiesToDo');
        })
    })

})