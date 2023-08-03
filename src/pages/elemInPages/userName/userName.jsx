import { Link } from "react-router-dom";

const UserName = (props) => {

    return (
        <>
            <Link to="/login" className={props.class}>Войти</Link>
            <Link className={props.class}>Зарегистрироваться</Link>
        </>
    );
}
export default UserName;