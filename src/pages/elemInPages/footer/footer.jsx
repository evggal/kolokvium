import FooterMenu from "./footerMenu/footerMetu";
import style from './footer.module.css';
import SocialNetwork from "./socialNetwork/socialNetwork";
import LogoGarage from "../logoGarage/logoGarage";

const Footer = () => {
    return (
        <footer className={style.footer}>
            <LogoGarage style={style.footer__logo}/>
            <FooterMenu />
            <SocialNetwork />
        </footer>
    );
}

export default Footer;