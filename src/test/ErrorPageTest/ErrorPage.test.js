/* eslint-disable testing-library/no-render-in-setup */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { findByText, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import ErrorPage from '../../ErrorPage/ErrorPage';
import userEvent from '@testing-library/user-event';


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