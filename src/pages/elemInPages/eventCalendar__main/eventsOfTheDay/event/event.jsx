import style from "./event.module.css";

const Event = (props) => {
    if (props.event.style == "NO EVENT") {
        return (
            <div className={style.no_events}>
                <h3>Мероприятий не надено</h3>
            </div>
        );
    } else {
        return (
            <div className={style.event}>
                <div className={style.event__divImg}>
                <img
                    src={process.env.PUBLIC_URL + "/image/otherImages/events/" + props.event.image}
                    className={style.event__img}
                ></img>
                </div>
                <h2>{props.event.title}</h2>
                <p className={style.event__p}>
                    {
                        props.event.time + ", "+ props.event.type + ", "
                    }
                    <br></br>
                    {props.event.place}
                </p>
            </div>
        );
    }

}

export default Event;