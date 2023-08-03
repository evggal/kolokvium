import style from "./partnersImg.module.css";

const PartnersImg = (props) => {
    const col = props.partners.lenght;
    return (
        <div className={style.partnersImg}>
            {props.partners.map(elem => 
                <img src={process.env.PUBLIC_URL + '/image/otherImages/partners/' + elem.name + ".svg"} className={style.partnersImg__img}></img>
            )}
        </div>
    );
}

export default PartnersImg;