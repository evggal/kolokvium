import { useState } from "react";
import Main__title from "./main__title/main__title";
import EventsOfTheDay from "./eventsOfTheDay/eventsOfTheDay";
import style from "./eventCalendar__main.module.css";
import Button from "../button/button";

const eventsList = [
    { id: 101, date: new Date, time: "12:00", title: "/suai.dev", type: "Собрание", place: "Точка кипения ГУАП", image: "MyImg2.png" },
    { id: 102, date: new Date, time: "16:00", title: "Python-квест", type: "Хакатон", place: "Точка кипения ГУАП", image: "MyImg3.png" },
    { id: 103, date: new Date, time: "15:00", title: "3D Furious", type: "Хакатон", place: "Инженерная школа ГУАП", image: "MyImg2.png" },
    { id: 104, date: new Date, time: "14:00", title: "Встреча с ректором", type: "Собрание", place: "БМ 53-03", image: "MyImg5.png" },
    { id: 1, date: "07-25-23", time: "12:00", title: "/suai.dev", type: "Собрание", place: "Точка кипения ГУАП", image: "MyImg2.png" },
    { id: 2, date: "07-25-23", time: "16:00", title: "Python-квест", type: "Хакатон", place: "Точка кипения ГУАП", image: "MyImg3.png" },
    { id: 3, date: "07-25-23", time: "13:00", title: "3D Furious", type: "Хакатон", place: "Инженерная школа ГУАП", image: "MyImg2.png" },
    { id: 4, date: "07-26-23", time: "12:00", title: "Встреча с ректором", type: "Собрание", place: "БМ 53-03", image: "MyImg5.png" },
    { id: 5, date: "07-26-23", time: "13:00", title: "/suai.dev", type: "Лекция", place: "Инженерная школа ГУАП", image: "MyImg6.png" },
    { id: 6, date: "07-25-23", time: "14:00", title: "День открытых дверей", type: "Встреча", place: "Инженерная школа ГУАП", image: "MyImg6.png" },
    { id: 7, date: "07-26-23", time: "16:00", title: "Это заголовок", type: "Тип пероприятия", place: "Место проведения", image: "MyImg5.png" },
    { id: 8, date: "07-27-23", time: "15:00", title: "Кибербезопасность", type: "Лекция", place: "Инженерная школа ГУАП", image: "MyImg6.png" },
    { id: 9, date: "07-27-23", time: "14:00", title: "День открытых дверей", type: "Встреча", place: "Инженерная школа ГУАП", image: "MyImg2.png" },
    { id: 10, date: "07-27-23", time: "16:00", title: "Это заголовок", type: "Тип мероприятия", place: "место проведения", image: "MyImg2.png" }
];

const WhatADay = (date) => {
    date = new Date(date);
    if (new Date().setHours(0, 0, 0, 0) == date.setHours(0, 0, 0, 0)) {
        return ("today");
    } else if (new Date().getDate() + 1 == date.getDate()) {
        return ("tomorrow");
    } else if (new Date() < date) {
        return ("nextDay");
    } else {
        return ("previous");
    }
}

const EventCalendar__main = () => {
    const [colDay, setColDay] = useState(3);

    const eventOfDay = new Array(colDay);
    for (let i = 0; i < colDay; i++) {
        eventOfDay[i] = eventsList.filter((elem) =>
            new Date(elem.date).setHours(0, 0, 0, 0) == new Date(new Date().setDate(new Date().getDate() + i)).setHours(0, 0, 0, 0))
            .sort((a, b) => {
                if (a.time > b.time) { return (1) }
                else if (b.time > a.time) { return (-1) }
                else { return 0 }
            })
        if (eventOfDay[i].length == 0) {
            eventOfDay[i] = [
                {
                    style: "NO EVENT",
                    date: new Date(new Date().setDate(new Date().getDate() + i)),
                    title: "Мероприятий не найдено"
                }
            ]
        }
    }
    return (
        <main className={style.main}>
            <Main__title />
            {eventOfDay.map(elem =>
                <EventsOfTheDay events={elem} />
            )}
            <Button click={() => setColDay(day => day + 3)} value={"загрузить ещё"}/>
            {/* 
            h1- календарь мероприятий
            дата
            мероприятия
            дата
            мероприятия
            кнопка добавить мероприятия
            */}
        </main>
    );
}

export default EventCalendar__main;