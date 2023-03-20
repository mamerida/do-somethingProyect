/* eslint-disable testing-library/no-render-in-setup */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import ActivityCardComponent from '../../ActivityCardComponent/ActivityCardComponent';


describe("Activity Card Component", () => {

    const activitytest = {
        "activity": "Learn Express.js",
        "accessibility": 0.25,
        "type": "education",
        "participants": 1,
        "price": 0.1,
        "link": "https://expressjs.com/",
        "key": "3943506"
    };

    const mokButtonClick = jest.fn()

    const textButton = "Im a test";
    let renderInstance;

    beforeEach(() => {
        renderInstance = render(<ActivityCardComponent
            activity={activitytest}
            functionButton={mokButtonClick}
            messageButton={textButton}
            stylesDefined="" />)
    })

    it("render element", () => {
        expect(renderInstance).toBeTruthy();
    })

    it("render Title", () => {
        expect(screen.getByTestId("activity_name")).toHaveTextContent(activitytest.activity)
    })

    it("render button", () => {
        expect(screen.getByTestId("activity_button")).toHaveTextContent(textButton)
    })

    it("button pressed", () => {
        fireEvent.click(screen.getByTestId("activity_button"))
        expect(mokButtonClick).toHaveBeenCalledTimes(1)
    })

})