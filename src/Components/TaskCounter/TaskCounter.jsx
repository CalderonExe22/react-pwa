import React from 'react';
import style from "./TaskCounter.module.css"

const TaskCounter = ({ tasks }) => {
    return (
        <div id={style.counterStyle} className='d-flex justify-content-between align-items-center p-4'>

            <span><i class="fa-solid fa-list me-2"></i>Tareas Totales: {tasks.length} </span>
            <span><i class="fa-solid fa-clock-rotate-left me-2"></i>Pendientes: {tasks.filter(task => task.completed === "pendiente").length} </span>
            <span><i class="fa-solid fa-check me-2"></i>Tareas Completadas: {tasks.filter(task => task.completed === "completada").length} </span>
    
        </div>
    );
};

export default TaskCounter;