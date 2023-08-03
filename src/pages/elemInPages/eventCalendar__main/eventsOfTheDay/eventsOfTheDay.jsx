import Event from "./event/event";
import style from "./eventsOfTheDay.module.css";

const WhatADay = (date) => {
    date = new Date(date);
    if (new Date().setHours(0, 0, 0, 0) == date.setHours(0, 0, 0, 0)) {
        return ("Сегодня, ");
    } else if (new Date().getDate() + 1 == date.getDate()) {
        return ("Завтра, ");
    } else {
        return ("");
    }
}
const getMyDate = (date) => {
    return date.getDate();
}
const getMyMonth = (date) => {
    switch (date.getMonth()) {
        case (0) : return " января, ";
        case (1) : return " февраля, ";
        case (2) : return " марта, ";
        case (3) : return " апреля, ";
        case (4) : return " мая, ";
        case (5) : return " июня, ";
        case (6) : return " июля, ";
        case (7) : return " августа, ";
        case (8) : return " сентября, ";
        case (9) : return " октября, ";
        case (0) : return " ноября, ";
        case (11) : return " декабря, ";
    }
}
const getMyDay = (date) => {
    switch (date.getDay()) {
        case (1) : return "понедельник";
        case (2) : return "вторник";
        case (3) : return "среда";
        case (4) : return "четверг";
        case (5) : return "пятница";
        case (6) : return "суббота";
        case (0) : return "воскресенье";
    }
}

const EventsOfTheDay = (props) => {
    const date = new Date(props.events[0].date);
    const styleNoEvent = (props.events[0].id == "NOT EVENT") ? "" : "not_event";
    return (
        <>
            <h1>{WhatADay(date) + getMyDate(date) + getMyMonth(date) + getMyDay(date)}</h1>
            <div className={style.EventsOfTheDay}>
                {props.events.map(event =>
                    <Event style={styleNoEvent} event={event}/>
                )
                }
            </div>
        </>
        
    );
}

export default EventsOfTheDay;