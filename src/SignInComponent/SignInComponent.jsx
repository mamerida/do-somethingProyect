import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import InputComponent from "../FormComponents/InputComponent/InputComponent";
import ButtonComponent from "../FormComponents/ButtonComponent/ButtonComponet";
import ErrorMessageComponent from "../FormComponents/ErrorMessageComponent/ErrorMessageComponent";
import styles from "./SignInComponent.module.scss";
import { schemaSingIn } from "../utils/fromsValidations";
import { registerUser } from "../utils/localHost";
import { useNavigate } from "react-router-dom";

const SingInComponent = () => {
    const [userExist, setUserExist] = useState(1);
    const navigate = useNavigate();

    const FormikhandleSubmit = async (values) => {
        let userToRegister = Object.assign({}, values);
        delete userToRegister["passwordRepeat"];
        let areUserRegistered = await registerUser(
            userToRegister,
            setUserExist
        );
        setUserExist(areUserRegistered);
    };

    useEffect(() => {
        if (userExist === 0) {
            navigate("/", { replace: true });
        }
    }, [userExist]);

    return (
        <section className={styles.SingInView}>
            <section className={styles.formContainer}>
                <div className={styles.titleSingIn}>Create your accont</div>
                <Formik
                    initialValues={{
                        email: "",
                        name: "",
                        lastName: "",
                        age: "",
                        password: "",
                        passwordRepeat: "",
                    }}
                    validationSchema={schemaSingIn}
                    onSubmit={(values) => {
                        FormikhandleSubmit(values);
                    }}
                >
                    {(formik) => (
                        <Form
                            className={styles.loginForm}
                            onSubmit={formik.handleSubmit}
                        >
                            <InputComponent
                                name="email"
                                label="Email"
                                requir="true"
                                placeholder="email@email.com"
                            />
                            <InputComponent
                                name="name"
                                label="Name"
                                requir="true"
                                placeholder="Thor"
                            />
                            <InputComponent
                                name="lastName"
                                label="Last name"
                                requir="true"
                                placeholder="Odin"
                            />
                            <InputComponent
                                name="age"
                                label="Age"
                                requir="true"
                                placeholder="99"
                            />
                            <InputComponent
                                name="password"
                                label="Password"
                                type="password"
                                requir="true"
                            />
                            <InputComponent
                                name="passwordRepeat"
                                label="Repeat your Password"
                                type="password"
                                requir="true"
                            />
                            <ButtonComponent type="submit">
                                Create Acount
                            </ButtonComponent>
                        </Form>
                    )}
                </Formik>
                {userExist ? null : (
                    <ErrorMessageComponent>
                        There is already a registered user with this email
                    </ErrorMessageComponent>
                )}
            </section>
        </section>
    );
};

export default SingInComponent;
