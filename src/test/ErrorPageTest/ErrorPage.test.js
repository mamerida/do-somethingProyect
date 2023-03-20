/* eslint-disable testing-library/no-render-in-setup */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import ErrorPage from '../../ErrorPage/ErrorPage';


describe("Error Page Component", () => {
    let renderInstance;

    beforeEach(() => {
        renderInstance = render(<ErrorPage />, { wrapper: BrowserRouter })
    })

    it("render element", () => {
        expect(renderInstance).toBeTruthy();
    })

    it("render Title and button", () => {
        expect(screen.getByText("Oops!")).toBeInTheDocument();
        expect(screen.getByText("Go to LogIn")).toBeInTheDocument();
    })
})