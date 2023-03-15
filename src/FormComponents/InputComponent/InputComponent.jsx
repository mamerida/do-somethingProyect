import React from "react";
import { useField } from "formik";
import styles from "./InputComponent.module.scss";

const InputComponent = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    const { requir } = props;

    return (
        <section className={styles.inputContainer}>
            <label className={styles.label}>
                {label}
                <span className={styles.isRequire}>{requir ? "*" : ""}</span>
            </label>
            <input
                className={
                    meta.touched && meta.error
                        ? styles.inputComponent__withError
                        : styles.inputComponent
                }
                {...field}
                {...props}
            />
            {meta.touched && meta.error ? (
                <div className={styles.error}>{meta.error}</div>
            ) : null}
        </section>
    );
};

export default InputComponent;
