import Laboratory from './laboratory/laboratory';
import style from './main.module.css';
import LeaderLine from "react-leader-line";
import { useRef, useEffect, createRef, useState } from 'react';
import Laboratory_copy from './laboratory/laboratory_copy';

const laboratoryList = [
    {
        id: '1',
        name: 'Лаборатория технологического предпринимательства',
        sponsors: [
            { id: 1, name: 'MegafonLogo' },
            { id: 2, name: 'YandexLogo' },
            { id: 3, name: 'GazPromLogo' },
            { id: 4, name: 'UniversityNTILogo' },
            { id: 5, name: 'KirovskiiZavodLogo' }
        ],
        partners: [
            { id: 1, name: 'GazProm' },
            { id: 2, name: 'Megafon' },
            { id: 3, name: 'SilovMash' },
            { id: 4, name: 'Rosseti' }
        ]
    },
    {
        id: '2', name: 'Лаборатория интернета вещей', sponsors: [
            { id: 1, name: 'MegafonLogo' },
            { id: 2, name: 'YandexLogo' },
            { id: 3, name: 'GazPromLogo' },
            { id: 4, name: 'UniversityNTILogo' },
            { id: 5, name: 'KirovskiiZavodLogo' }
        ],
        partners: [
            { id: 1, name: "nationalInstruments" },
            { id: 2, name: "kuka" }
        ]
    },
    {
        id: '3', name: 'Лаборатория робототехники', sponsors: [
            { id: 1, name: 'MegafonLogo' },
            { id: 2, name: 'YandexLogo' },
            { id: 3, name: 'GazPromLogo' },
            { id: 4, name: 'UniversityNTILogo' },
            { id: 5, name: 'KirovskiiZavodLogo' }
        ],
        partners: [
            { id: 1, name: "nationalInstruments" },
            { id: 2, name: "kuka" }
        ]

    },
    {
        id: '4', name: 'Лаборатория беспилотных авиационных систем', sponsors: [
            { id: 1, name: 'MegafonLogo' },
            { id: 2, name: 'YandexLogo' },
            { id: 3, name: 'GazPromLogo' },
            { id: 4, name: 'UniversityNTILogo' },
            { id: 5, name: 'KirovskiiZavodLogo' }
        ],
        partners: [
            { id: 1, name: 'GazProm' },
            { id: 2, name: 'Megafon' },
            { id: 3, name: 'SilovMash' },
            { id: 4, name: 'Rosseti' }
        ]
    },
    {
        id: '5', name: 'Лаборатория искусственного интеллекта', sponsors: [
            { id: 1, name: 'MegafonLogo' },
            { id: 2, name: 'YandexLogo' },
            { id: 3, name: 'GazPromLogo' },
            { id: 4, name: 'UniversityNTILogo' },
            { id: 5, name: 'KirovskiiZavodLogo' }
        ],
        partners: [
            { id: 1, name: 'GazProm' },
            { id: 2, name: 'Megafon' },
            { id: 3, name: 'SilovMash' },
            { id: 4, name: 'Rosseti' }
        ]
    },
    {
        id: '6', name: 'Лаборатория кибербезопасности ГУАП-Infowatch', sponsors: [
            { id: 1, name: 'MegafonLogo' },
            { id: 2, name: 'YandexLogo' },
            { id: 3, name: 'GazPromLogo' },
            { id: 4, name: 'UniversityNTILogo' },
            { id: 5, name: 'KirovskiiZavodLogo' }
        ],
        partners: [
            { id: 1, name: 'GazProm' },
            { id: 2, name: 'Megafon' },
            { id: 3, name: 'SilovMash' },
            { id: 4, name: 'Rosseti' }
        ]
    }
];

const mainStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gridTemplateRows: 'repeat(' + laboratoryList.at(-1).id + ', 100px 1fr) 100px',
    alignItems: 'stretch',
    justifyItems: 'center',
};

const setLine = () => {

}

const Main = () => {

    /*window.addEventListener('load', () => {
        const lineOptions = {
            endPlug: "behind",
            path: "straight",
            color: "rgba(255, 255, 255, 0.5)"
        };
        for (let i = 1; i < laboratoryList.length; i++) {
            new LeaderLine(document.getElementsByClassName("ref" + i)[0], document.getElementsByClassName("ref" + (i + 1))[0], lineOptions);
        }
    })*/
    const line = new Array(laboratoryList.length);
    console.log(line)
    useEffect(() => {
        const lineOptions = {
            endPlug: "behind",
            path: "straight",
            color: "rgba(255, 255, 255, 0.5)"
        };
        let elem, disp;
        for (let i = 1; i < laboratoryList.length; i++) {
            elem = document.getElementsByClassName("ref" + i);
            disp = window.getComputedStyle(elem[0]).display;
            console.log(disp == "none");
            line[i-1] = new LeaderLine(
                document.getElementsByClassName("ref" + i)[0], 
                document.getElementsByClassName("ref" + (i + 1))[0], lineOptions);
        }
        console.log("a", line[0]);
    });
    /*
    useEffect(() => {
        const lineOptions = {
            endPlug: "behind",
            path: "straight",
            color: "rgba(255, 255, 255, 0.5)"
        };
        for (let i = 1; i < laboratoryList.length; i++) {
            new LeaderLine(document.getElementsByClassName("ref" + i)[0], document.getElementsByClassName("ref" + (i + 1))[0], lineOptions);
        }
    }, []);
    */
    let i = 1
    return (
        <main
            className={style.mainContent}
            style={mainStyle}
            onClick={() => {
                /*setLineStyle(() => {
                    /*const lineOptions = {
                        endPlug: "behind",
                        path: "straight",
                        color: "rgba(255, 255, 255, 0.5)"
                    };
                    for (let i = 1; i < laboratoryList.length; i++) {
                        new LeaderLine(document.getElementsByClassName("ref" + i)[0], document.getElementsByClassName("ref" + (i + 1))[0], lineOptions);
                    }
                });
                
            })*/
            }}
        >
            {laboratoryList.map(laboratory =>
                <Laboratory
                    id={laboratory.id}
                    ref={laboratoryList.ref}
                    nameLaboratory={laboratory.name}
                    sponsors={laboratory.sponsors}
                    partners={laboratoryList.partners}
                    line={line}
                />
            )}
            {/*laboratoryList.map(laboratory =>
                <Laboratory_copy
                    id={laboratory.id}
                    ref={laboratoryList.ref}
                    nameLaboratory={laboratory.name}
                    sponsors={laboratory.sponsors}
                    partners={laboratoryList.partners}
                />
            )*/}
            {/*
        элементы - лаборатории с props
            будут передаваться координаты центра или типо того
        элемент
            линия между элементами-лаборатории
        */}
        </main >
    );
}

export default Main;