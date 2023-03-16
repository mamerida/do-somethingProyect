import { useRouteError, Link } from "react-router-dom";
import styles from "./ErrorPage.module.scss";
import ButtonComponent from "../FormComponents/ButtonComponent/ButtonComponet";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <section className={styles.errorContainer}>
            <div className={styles.errorCard}>
                <img
                    className={styles.ChrPhoto}
                    src="/worryFaceIcon.png"
                    alt="worryFace"
                />
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
                <Link to={"/login"}>
                    <ButtonComponent>Go to LogIn</ButtonComponent>
                </Link>
            </div>
        </section>
    );
};
export default ErrorPage;
