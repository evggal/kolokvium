import Laboratory from './laboratory/laboratory';
import style from './main.module.css';

const laboratoryList = [
    {id:'1', name:'Лаборатория технологического предпринимательства'},
    {id:'2', name:'Лаборатория интернета вещей'},
    {id:'3', name:'Лаборатория робототехники'},
    {id:'4', name:'Лаборатория беспилотных авиационных систем'},
    {id:'5', name:'Лаборатория искусственного интеллекта'},
    {id:'6', name:'Лаборатория кибербезопасности ГУАП-Infowatch'}
];

const mainStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 2fr 1fr 1fr',
    gridTemplateRows: 'repeat(' + laboratoryList.at(-1).id + ', 1fr)',
    rowGap: '2em'
};

const Main = () => {
    return (
        <main className={style.mainContent} style={mainStyle}>
            {laboratoryList.map(laboratory => 
                <Laboratory id={laboratory.id} nameLaboratory={laboratory.name}/>
                )}
        {/*
        элементы - лаборатории с props
            будут передаваться координаты центра или типо того
        элемент
            линия между элементами-лаборатории
        */}
        </main>
    );
}

export default Main;