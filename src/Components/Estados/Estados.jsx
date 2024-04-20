import TarjetaTask from "../TarjetaTask/TarjetaTask";
import style from "./Estados.module.css"

const Estados = ({tasks,setTasks}) =>{

    const handleDragStart = (event,taskId) =>{
        event.dataTransfer.setData("taskId",taskId)
    }

    const handleDragOver = (event)=>{
        event.preventDefault()
    }

    const handleDrop = (e,completed) => {
        const taskId = e.dataTransfer.getData('taskId');
        const updateTask = tasks.map(task => task.id.toString() === taskId ? {...task,completed} : task )
        setTasks(updateTask)
    }

    return (
        <div className="row d-flex justify-content-center gap-5 p-5">
            <div className={style.container1 + " col-4"} onDragOver={handleDragOver} onDrop={(e)=>handleDrop(e,"sin valor")}>
                <h2>Tareas Totales</h2>
                {
                    tasks.map(task => task.completed === "sin valor" && (
                        <TarjetaTask key={task.id} titulo={task.titulo} descripcion={task.description} draggable={"true"} onDragStart={(e)=>handleDragStart(e,task.id)} ></TarjetaTask>
                    ))
                }
            </div>
            <div className={style.container2 + " col-4"} onDragOver={handleDragOver} onDrop={(e)=>handleDrop(e,"pendiente")}>
                <h2>Tareas pendientes</h2>
                {
                    tasks.map(task => task.completed === "pendiente" && (
                        <TarjetaTask key={task.id} titulo={task.titulo} descripcion={task.description} draggable={"true"} onDragStart={(e)=>handleDragStart(e,task.id)} ></TarjetaTask>
                    ))
                }
            </div>
            <div className={style.container3 + " col-4"} onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, "completada")}>
                <h2>Tareas completadas</h2>
                {tasks.map(task => task.completed === "completada" && (
                    <TarjetaTask key={task.id} titulo={task.titulo} descripcion={task.description} draggable={"true"} onDragStart={(e)=>handleDragStart(e,task.id)}/>
                ))}
            </div>
            
        </div>
    );
}

export default Estados