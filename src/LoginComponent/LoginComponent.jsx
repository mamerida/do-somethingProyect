import React, { useState } from "react";
import { Form, Formik } from "formik";
import InputComponent from "../FormComponents/InputComponent/InputComponent";
import ButtonComponent from "../FormComponents/ButtonComponent/ButtonComponet";
import ErrorMessageComponent from "../FormComponents/ErrorMessageComponent/ErrorMessageComponent";
import styles from "./LoginComponent.module.scss";
import { schemaLogin } from "../utils/fromsValidations";
import { consultUserLogin } from "../utils/localHost";
import { Link, useNavigate } from "react-router-dom";

const LoginComponent = () => {
    const [badUserCredentials, setBadUserCredentials] = useState(true);
    const navigate = useNavigate();

    const handleLoginSubmit = (values) => {
        let result = consultUserLogin(values);
        console.log(result);
        if (result) {
            navigate("/");
        }
        setBadUserCredentials(result);
    };
    return (
        <section className={styles.loginView}>
            <section className={styles.formContainer}>
                <div className={styles.titleLogin}>Welcome</div>
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                    }}
                    validationSchema={schemaLogin}
                    onSubmit={(values) => {
                        handleLoginSubmit(values);
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
                                name="password"
                                label="Password"
                                type="password"
                                requir="true"
                            />
                            {!badUserCredentials ? (
                                <ErrorMessageComponent>
                                    Error in email or password
                                </ErrorMessageComponent>
                            ) : null}
                            <ButtonComponent type="submit">
                                Do Something!
                            </ButtonComponent>
                        </Form>
                    )}
                </Formik>
                <div className={styles.linkContainer}>
                    <Link to={"/signin"}>Don't have an account?</Link>
                </div>
            </section>
        </section>
    );
};

export default LoginComponent;
