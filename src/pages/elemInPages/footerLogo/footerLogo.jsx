import "./footerLogo.css";
import img1 from './../../../image/otherImages/wheelGear.svg';
import img2 from './../../../image/otherImages/SUAIlogo.svg';

const FooterLogo = () => {
    return (
        <footer className="footerLogo">
            <img src={img1}></img>
            <img src={img2}></img>
        </footer>
    );
}

export default FooterLogo;