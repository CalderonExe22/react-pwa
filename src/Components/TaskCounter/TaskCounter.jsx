import React from 'react';
import style from "./TaskCounter.module.css"

const TaskCounter = ({ tasks }) => {
    return (
        <div id={style.counterStyle} className='d-flex justify-content-between align-items-center p-4'>

            <span>Tareas Totales: {tasks.length} </span>
            <span>Pendientes: 0</span>
            <span>Tareas Completadas: {tasks.filter(task => task.completada).length} </span>
            
        </div>
    );
};

export default TaskCounter;