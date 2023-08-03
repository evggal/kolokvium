import UserName from '../../userName/userName';
import './header__navigation.css';
import { Link, Route } from 'react-router-dom';

const Hedaer__navigation = () => {
    const navElem = [
        {name:"О школе", link:"/"},
        {name:"Подразделения", link:"/"},
        {name:"Мероприятия", link:"/events"},
        {name:"Студентам", link:"/"},
        {name:"Школьникам", link:"/"},
        {name:"Партнёрам", link:"/"},
        {name:"Контакты", link:"/"}
];
    return (
        <nav className="header__nav">
            {navElem.map(elem => 
                <Link to={elem.link} className="header__a">{elem.name}</Link>
            )}
            <UserName class="header__name"/>
        </nav>
    );
}

export default Hedaer__navigation;