import * as Yup from "yup";

export const schemaLogin = Yup.object({
    email: Yup.string().email('Invalid email').required('email is required'),
    password: Yup.string().required('Please, insert a password')
})

export const schemaSingIn = Yup.object({
    email: Yup.string().email('Invalid email').required('email is required'),
    name: Yup
        .string()
        .matches(
            /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
            'Name can only contain Latin letters.')
        .required('Please Enter your name')
        .min(4, 'The name is too short')
        .max(20, 'The name is too long'),
    lastName: Yup
        .string()
        .matches(
            /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
            'Name can only contain Latin letters.')
        .required('Please Enter your name')
        .min(4, 'The name is too short')
        .max(20, 'The name is too long'),
    age: Yup
        .number("Please, insert a valid last name")
        .required('Please Enter your age')
        .min(1, 'The age is too low')
        .max(107, 'The age is too high'),
    password: Yup
        .string()
        .required('Please Enter your password')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character")
    ,
    passwordRepeat: Yup
        .string()
        .required('Please repeat your password')
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
})
