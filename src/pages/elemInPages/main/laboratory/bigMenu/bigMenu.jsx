import { Link, Route } from 'react-router-dom';
import { useState } from "react";
import style from "./bigMenu.module.css";
import PartnersImg from './partnersImg/partnersImg';
import LabProject from './labProject/labProject';

const BigMenu = (props) => {
    const Grid_column = (id) => {
        return ((id % 4 === 1 || id % 4 === 0) ? 2 : 5);
    }
    const [bigMenuStyle, getbigMenuStyle] = useState({
        height: "500px",
        width: "500px",
        margin: "10px"
    })
    return (
        <div 
        className={style.bigMenu + " ref" + props.id} 
        style={{...props.style, ...bigMenuStyle}}
        onClick={props.click}
        >
            <span className={style.circle}></span>
            <h4 className={style.bigMenu__h3}>{props.nameLaboratory}</h4>
            <h4>Партнёры</h4>
            <PartnersImg partners={props.partners}/>
            <h4>Проекты</h4>
            <LabProject projects={props.projects}/>
            <Link to="/labInfo" state={{id:props.idLab}} className={style.bigMenu__link}>
                Подробнее ➜
            </Link>
            {/*
                название
                партнёры
                проекты
                подробнее (ссылка)
            */}
        </div>
    );
}

export default BigMenu;