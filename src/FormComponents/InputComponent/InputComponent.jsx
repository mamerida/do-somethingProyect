import React from "react";
import { useField } from "formik";
import styles from "./InputComponent.module.scss";

const InputComponent = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    const { required } = props;

    return (
        <section className={styles.inputContainer}>
            <label className={styles.label}>
                {label}
                <span className={styles.isRequire}>{required ? "*" : ""}</span>
            </label>
            {meta.touched && meta.error ? (
                <>
                    <input
                        className={styles.inputComponent__withError}
                        {...field}
                        {...props}
                    />
                    <div className={styles.error}>{meta.error}</div>
                </>
            ) : (
                <input
                    className={styles.inputComponent}
                    {...field}
                    {...props}
                />
            )}
        </section>
    );
};

export default InputComponent;
