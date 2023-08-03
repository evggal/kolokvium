import { Link, Route } from 'react-router-dom';
import logo from '../../../image/image__logo/logo.svg';
import style from "./button.module.css";


const Button = (props) => {
    if (PaymentResponse.style == "undefined") {
        PaymentResponse.style = "";
    }
    return(
        <div className={style.button}>
            <div 
            className={props.style + " " + style.button__button}
            onClick={props.click}
            >
                {props.value}
            </div>
        </div>
    );
}

export default Button;