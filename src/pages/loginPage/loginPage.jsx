import style from "./loginPage.module.css";

const LoginPage = () => {
    return (
        <div className={style.loginPage}>
            <input type="login"></input>
            <input type="password"></input>
        </div>
    );
}

export default LoginPage;