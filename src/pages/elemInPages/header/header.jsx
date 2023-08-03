import LogoGarage from '../logoGarage/logoGarage';
import Hedaer__navigation from './__navigation/header__navigation';
import './header.css';

const Header = (props) => {
    return (
        <header className={props.style}>
            <LogoGarage />
            <Hedaer__navigation />
        </header>
    );
}

export default Header;