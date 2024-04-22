import TarjetaTask from "../TarjetaTask/TarjetaTask";
import style from "./Estados.module.css"

const Estados = ({tasks,setTasks}) =>{

    //titulo de la pagina
    document.title = "Tablero"

    //Esta función se activa cuando comienza un evento de arrastre (dragstart) en un elemento
    //que tiene la propiedad draggable establecida en true, como las tarjetas de tarea TarjetasTask
    const handleDragStart = (event,taskId) =>{
        //el método setData() del objeto dataTransfer del evento para establecer datos que serán transferidos durante el evento de arrastre.
        //En este caso, estamos configurando un dato con la clave "taskId" y el valor taskId, que es el identificador único de la tarea que se está arrastrando 
        event.dataTransfer.setData("taskId",taskId)
    }

    const handleDragOver = (event)=>{
        //de forma predeterminada, los navegadores no permiten soltar elementos en otras áreas
        //Por eso llamamos a un preventDefault para que el elemento arrastrable se suelte en el área que está escuchando eventos de dragover.
        event.preventDefault()
    }

    // Esta función se activa cuando se suelta un elemento arrastrable sobre un área del evento drop
    const handleDrop = (e,completed) => {
        //Dentro de la función, primero obtenemos el identificador único de la tarea que se está 
        //soltando utilizando el método getData() del objeto dataTransfer del evento. Este identificador 
        //se había establecido previamente en la función handleDragStart.
        const taskId = e.dataTransfer.getData('taskId');
        //Luego, actualizamos el estado de las tareas utilizando el método map() para recorrer todas las
        //tareas. Si el identificador de la tarea coincide con el taskId obtenido del evento de soltar, 
        //actualizamos el estado de esa tarea con el estado proporcionado (completed). De lo contrario, dejamos la tarea sin cambios.
        const updateTask = tasks.map(task => task.id.toString() === taskId ? {...task,completed} : task )
        setTasks(updateTask)
    }

    return (
        <div className="row d-flex justify-content-center gap-5 p-5 m-0">

            <div className={style.container1 + " col-4"} onDragOver={handleDragOver} onDrop={(e)=>handleDrop(e,"sin valor")}>
                <h2>Tareas Totales</h2>
                {
                    tasks.map(task => task.completed === "sin valor" && (
                        <TarjetaTask key={task.id} id={task.id} titulo={task.titulo} descripcion={task.description} draggable={"true"} onDragStart={(e)=>handleDragStart(e,task.id)} ></TarjetaTask>
                    ))
                }
            </div>
            <div className={style.container2 + " col-4"} onDragOver={handleDragOver} onDrop={(e)=>handleDrop(e,"pendiente")}>
                <h2>Tareas pendientes</h2>
                {
                    tasks.map(task => task.completed === "pendiente" && (
                        <TarjetaTask key={task.id} id={task.id} titulo={task.titulo} descripcion={task.description} draggable={"true"} onDragStart={(e)=>handleDragStart(e,task.id)} ></TarjetaTask>
                    ))
                }
            </div>
            <div className={style.container3 + " col-4"} onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, "completada")}>
                <h2>Tareas completadas</h2>
                {tasks.map(task => task.completed === "completada" && (
                    <TarjetaTask key={task.id} id={task.id} titulo={task.titulo} descripcion={task.description} draggable={"true"} onDragStart={(e)=>handleDragStart(e,task.id)}/>
                ))}
            </div>
            
        </div>
    );
}

export default Estados