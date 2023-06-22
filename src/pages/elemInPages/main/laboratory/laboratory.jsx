import { useState } from "react";
import CircleGearWheel from "./circleGearWheel/circleGearWheel";
import style from './laboratory.module.css';
import Sponsors from "./sponsors/sponsors";

const Laboratory = (props) => {
    const Grid_column = (id) => {
        return ((id % 4 === 1 || id % 4 === 0) ? 2 : 5);
    }
    const laboratoryStyle = {
        gridColumn: Grid_column(props.id),
        gridRow: props.id
    }
    //const rect = ref.current.getBoundingClientRect();
    const [sponsorsStyle, setSponsorsStyle] = useState({
        display: 'none'
    });
    const [center, setCenter] = useState();
    /*const [center, setCenter] = useState(new Map());

    const SponsorsDisplayBlock = (e) => {
        setSponsorsStyle({ display: 'block' })
        const element = e.target.getBoundingClientRect();
        let centerX = element.left + 40;
        let centerY = element.top + 40;
        setCenter(centerXY.x = centerX);
        setCenter(centerXY.y = centerY);
        //setCenter(centerXY = {x:centerX, y:centerY});
        console.log(centerXY);
        console.log(centerX, centerY);
    };
    */
    return (
        <div className={style.laboratory}
            style={laboratoryStyle}
            onMouseEnter={(e) => {
                setSponsorsStyle({ display: 'block' })
                e.target.getBoundingClientRect();
                setCenter(e.target.getBoundingClientRect());
            }}
            onMouseLeave={() => {setSponsorsStyle({ display: 'none' })}

            }>
            <CircleGearWheel key={props.id} nameLaboratory={props.nameLaboratory} />
            <Sponsors parent={center} sponsors={props.sponsors} style={sponsorsStyle} />
            {/*
            кружок
            спонсоры
            открывающееся меню MegafonLogo.png
        */}

        </div>
    );
}

export default Laboratory;