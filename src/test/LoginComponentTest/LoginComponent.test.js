/* eslint-disable testing-library/no-render-in-setup */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import LoginComponent from '../../LoginComponent/LoginComponent';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { IsUserLoged, registerUser, createStorare } from '../../utils/localHost';

describe("Login Page Component", () => {
    let renderInstance;
    let user;
    let newUser = {
        email: "john.dee@someemail.com",
        password: "Ma123434534!"
    }

    beforeEach(() => {
        renderInstance = render(<BrowserRouter><LoginComponent /></BrowserRouter>)
        user = userEvent.setup()
        newUser = {
            email: "john.dee@someemail.com",
            password: "Ma123434534!"
        }
        registerUser(newUser)
    })

    afterEach(() => {
        jest.clearAllMocks();
        createStorare();
        newUser = {
            email: "john.dee@someemail.com",
            password: "Ma123434534!"
        }
    })

    it("render element", () => {
        expect(renderInstance).toBeTruthy();
    })

    it("try submit form", async () => {
        await user.type(screen.getByTestId("email", { name: /email/i }), newUser.email)
        await user.type(screen.getByTestId("password", { name: /password/i }), newUser.password)

        await user.click(screen.getByTestId("submit"))
        await waitFor(() => {
            expect(IsUserLoged()).not.toEqual(false)
        })

    })

    it("get user Loged and compare with user joined", async () => {
        newUser = {
            email: "john.dee@someemail.com",
            password: "Ma123434534!"
        }
        await user.type(screen.getByTestId("email", { name: /email/i }), newUser.email)
        await user.type(screen.getByTestId("password", { name: /password/i }), newUser.password)
        await user.click(screen.getByTestId("submit"))
        await waitFor(() => {
            expect(IsUserLoged().email == newUser.email).toBe(true);
        })
    })

    it("error message without inputs", async () => {
        await user.click(screen.getByTestId("submit"))
        await waitFor(() => {
            expect(screen.getByText("email is required")).toBeInTheDocument();
        })
        await waitFor(() => {
            expect(screen.getByText("Please, insert a password")).toBeInTheDocument();
        })
    })

    it("error message with wrong email", async () => {
        await user.type(screen.getByTestId("email", { name: /email/i }), "asdasd")
        await user.type(screen.getByTestId("password", { name: /password/i }), "asdasd")
        await user.click(screen.getByTestId("submit"))
        await waitFor(() => {
            expect(screen.getByText("Invalid email")).toBeInTheDocument();
        })
    })

    it("error message with wrong password", async () => {
        await user.type(screen.getByTestId("email", { name: /email/i }), "mamerida2013@gmail.com")
        await user.type(screen.getByTestId("password", { name: /password/i }), "asdasd")
        await user.click(screen.getByTestId("submit"))
        await waitFor(() => {
            expect(screen.getByText("Error in email or password")).toBeInTheDocument();
        })
    })
})