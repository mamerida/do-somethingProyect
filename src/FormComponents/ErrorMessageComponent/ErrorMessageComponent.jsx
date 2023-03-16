import styles from "./ErrorMessageComponent.module.scss";

export const ErrorMessageComponent = ({ children }) => {
    return <div className={styles.error}>{children}</div>;
};

export default ErrorMessageComponent;
