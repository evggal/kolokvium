import EventCalendar__main from "../elemInPages/eventCalendar__main/eventCalendar__main";
import Footer from "../elemInPages/footer/footer";
import Header from "../elemInPages/header/header";
import style from "./../laboratorySelection/laboratorySelection.module.css";

const EventCalendar = () => {
    return (
        <div className={style.laboratorySelection}>
            <Header style={"header_normal"} />
            <EventCalendar__main />
            <Footer />
        </div>
    );
}

export default EventCalendar;