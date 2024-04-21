import Button from "../Button/Button";
import style from "./ListarTareas.module.css"
import Titulo from '../Titulo/Titulo'

const ListarTareas = ({tareas,setTareas,tareaSeleccionada,setTareaSeleccionada}) =>{

    document.title = "Listar"
    

    const handleDeleteTask = (taskId) => {
        const updatedTasks = tareas.filter(tareas => tareas.id !== taskId);
        setTareas(updatedTasks);
    };

    return (

        <div className="p-5 d-flex flex-column gap-1">
            
            <Titulo titulo="Lista de tareas" />
            <div className={style.fila + " row p-2"}>
                <div className="col-3 text-center">
                    <h4>Titulo</h4>
                </div>
                <div className="col-3 text-center">
                    <h4>Descripcion</h4>
                </div>
                <div className="col-3 text-center">
                    <h4>Estado</h4>
                </div>
            </div>
            {tareas.map((tarea) => (
                <div key={tarea.id} className={tarea === tareaSeleccionada ? style.tareaResaltada + " row p-2"  : style.fila + " row p-2"  }>
                    <div className="col-3 text-center">
                        <span>{tarea.titulo}</span>
                    </div>
                    <div className="col-3 text-center">
                        <span>{tarea.description}</span>
                    </div>
                    <div className="col-3 text-center">
                        <span>{tarea.completed}</span>
                    </div>
                    <div className="col-3 text-center">
                        <Button onClick={()=>handleDeleteTask(tarea.id)} content={"Eliminar tarea"} />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ListarTareas