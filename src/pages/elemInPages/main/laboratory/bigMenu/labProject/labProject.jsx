import style from "./labProject.module.css";

const LabProject = (props) => {
    return (
        <div className={style.labProject}>
            {props.projects.map(elem => 
                <div className={style.labProject__project}><p>{elem.name}</p></div>    
            )}
        </div>
    );
}

export default LabProject;