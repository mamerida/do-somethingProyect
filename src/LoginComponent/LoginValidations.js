import * as Yup from "yup";

export const schemaLogin = Yup.object({
    email: Yup.string().email('Invalid email').required('email is required'),
    password: Yup.string().required('Please, insert a password')
})