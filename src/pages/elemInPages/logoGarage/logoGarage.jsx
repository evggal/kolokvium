import { Link, Route } from 'react-router-dom';
import logo from '../../../image/image__logo/logo.svg';


const LogoGarage = (props) => {
    if (PaymentResponse.style == "undefined") {
        PaymentResponse.style = "";
    }
    return(
        <Link to="/">
            <img src={logo} className={props.style}></img>
        </Link>
    );
}

export default LogoGarage;