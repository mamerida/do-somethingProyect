/* eslint-disable testing-library/no-render-in-setup */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor, } from '@testing-library/react';
import SignInComponent from '../../SignInComponent/SignInComponent'
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { IsUserLoged, registerUser, createStorare, IsUserRegistered } from '../../utils/localHost';

describe("Login Page Component", () => {
    let renderInstance;
    let user;
    let newUser = {
        email: "john.dee@someemail.com",
        name: "Johnnnn",
        lastName: "Deeeee",
        age: "27",
        password: "Ma123434534!",
        passwordRepeat: "Ma123434534!",
    }

    beforeEach(() => {
        renderInstance = render(<BrowserRouter><SignInComponent /></BrowserRouter>)
        user = userEvent.setup()
        registerUser(newUser)
    })

    afterEach(() => {
        jest.clearAllMocks();
        createStorare();
        newUser = {
            email: "john.dee@someemail.com",
            name: "Johnnnnn",
            lastName: "Deeeeee",
            age: "27",
            password: "Ma123434534!",
            passwordRepeat: "Ma123434534!",
        }
    })

    it("render element", () => {
        expect(renderInstance).toBeTruthy();
    })

    it("try submit form", async () => {
        await user.type(screen.getByTestId("email", { name: /email/i }), newUser.email)
        await user.type(screen.getByTestId("name", { name: /name/i }), newUser.name)
        await user.type(screen.getByTestId("lastName", { name: /lastName/i }), newUser.lastName)
        await user.type(screen.getByTestId("age", { name: /age/i }), newUser.age)
        await user.type(screen.getByTestId("password", { name: /password/i }), newUser.password)
        await user.type(screen.getByTestId("passwordRepeat", { name: /passwordRepeat/i }), newUser.passwordRepeat)

        await user.click(screen.getByTestId("submit"))
        await waitFor(() => {
            expect(IsUserLoged()).not.toEqual(false)
        })

    })

    it("Did save user registered", async () => {
        await user.type(screen.getByTestId("email", { name: /email/i }), newUser.email)
        await user.type(screen.getByTestId("name", { name: /name/i }), newUser.name)
        await user.type(screen.getByTestId("lastName", { name: /lastName/i }), newUser.lastName)
        await user.type(screen.getByTestId("age", { name: /age/i }), newUser.age)
        await user.type(screen.getByTestId("password", { name: /password/i }), newUser.password)
        await user.type(screen.getByTestId("passwordRepeat", { name: /passwordRepeat/i }), newUser.passwordRepeat)

        await user.click(screen.getByTestId("submit"))
        await waitFor(() => {
            let usersRegistereds = JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE_USERS))
            expect(IsUserRegistered(newUser, usersRegistereds)).toBe(true)
        })
    })

    it("Error Message", async () => {
        newUser = {
            email: "john.dee@someemail.com",
            name: "Johnnnnn",
            lastName: "Deeeeee",
            age: "27",
            password: "Ma123434534!",
            passwordRepeat: "Ma123434534!",
        }
        await user.type(screen.getByTestId("email", { name: /email/i }), newUser.email)
        await user.type(screen.getByTestId("name", { name: /name/i }), newUser.name)
        await user.type(screen.getByTestId("lastName", { name: /lastName/i }), newUser.lastName)
        await user.type(screen.getByTestId("age", { name: /age/i }), newUser.age)
        await user.type(screen.getByTestId("password", { name: /password/i }), newUser.password)
        await user.type(screen.getByTestId("passwordRepeat", { name: /passwordRepeat/i }), newUser.passwordRepeat)

        await user.click(screen.getByTestId("submit"))
        await waitFor(() => {
            expect(screen.getByText("There is already a registered user with this email")).toBeInTheDocument()
        })
    })

    it("Empty Inputs", async () => {
        await user.click(screen.getByTestId("submit"))
        await waitFor(() => {
            expect(screen.getByText("email is required")).toBeInTheDocument()
        })
        await waitFor(() => {
            expect(screen.getByText("Please Enter your name")).toBeInTheDocument()
        })
        await waitFor(() => {
            expect(screen.getByText("Please Enter your last name")).toBeInTheDocument()
        })
        await waitFor(() => {
            expect(screen.getByText("Please Enter your age")).toBeInTheDocument()
        })
        await waitFor(() => {
            expect(screen.getByText("Please Enter your password")).toBeInTheDocument()
        })
        await waitFor(() => {
            expect(screen.getByText("Please repeat your password")).toBeInTheDocument()
        })
    })

})