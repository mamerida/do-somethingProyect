/* eslint-disable testing-library/no-render-in-setup */
import ListOfSomethingComponent from "../../ListOfSomethingComponent/ListOfSomethingComponent";
import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from "../../app/store";
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import { createStorare } from '../../utils/localHost';
import { addSomethingToList } from "../../reducers/thingsToDoReducer";



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
    const act2 = {
        "activity": "Do yoga",
        "type": "recreational",
        "participants": 1,
        "price": 0,
        "link": "",
        "key": "4688012",
        "accessibility": 0.9
    }
    const act3 = {
        "activity": "Learn the periodic table",
        "type": "education",
        "participants": 1,
        "price": 0,
        "link": "https://en.wikipedia.org/wiki/Periodic_table",
        "key": "3621244",
        "accessibility": 0.6
    }

    beforeEach(() => {
        renderInstance = render(<BrowserRouter><Provider store={store}><ListOfSomethingComponent /></Provider></BrowserRouter>)
        act(() => {
            store.dispatch(addSomethingToList(act1))
            store.dispatch(addSomethingToList(act2))
            store.dispatch(addSomethingToList(act3))
        })
        user = userEvent.setup()
    })

    afterEach(() => {
        jest.clearAllMocks();
        createStorare();
    })

    it("renderComponent", () => {
        expect(renderInstance).toBeTruthy();
    })

    it("show 3 Cards", () => {
        expect(screen.getByText("Go for a walk")).toBeInTheDocument();
        expect(screen.getByText("Do yoga")).toBeInTheDocument();
        expect(screen.getByText("Learn the periodic table")).toBeInTheDocument();
    })

    it("delete activity", async () => {
        const buttons = await screen.findAllByTestId("activity_button")
        const button = buttons[0]
        await user.click(button)
        await waitFor(() => {
            expect(store.getState().something.somethingList.length).toBe(2)
        })
    })

})