import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import InputComponent from "../FormComponents/InputComponent/InputComponent";
import ButtonComponent from "../FormComponents/ButtonComponent/ButtonComponet";
import styles from "./LoginComponent.module.scss";

const LoginComponent = () => {
    return (
        <section className={styles.loginView}>
            <section className={styles.formContainer}>
                <div className={styles.titleLogin}>Welcome</div>
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                    }}
                    validate={(values) => console.log(values)}
                    onSubmit={(values) => console.log(values)}
                >
                    {(formik) => (
                        <Form
                            className={styles.loginForm}
                            onSubmit={formik.handleSubmit}
                        >
                            <InputComponent
                                name="email"
                                label="Email"
                                required
                                placeholder="email@email.com"
                            />
                            <InputComponent
                                name="password"
                                label="Password"
                                type="password"
                                required
                            />
                            <ButtonComponent>Do Something!</ButtonComponent>
                        </Form>
                    )}
                </Formik>
            </section>
        </section>
    );
};

export default LoginComponent;
