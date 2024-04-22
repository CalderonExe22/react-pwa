import Button from "../Button/Button";
import style from "./ListarTareas.module.css"
import Titulo from '../Titulo/Titulo'

//se ingresa por parametros la coleccion de tareas, el set de tareas, y tarea seleccionada que es una 
//coleccion la cual almacena una tarea que se haya ingresado el el buscador del header, esta coleccion 
//es tambien un useState
const ListarTareas = ({tareas,setTareas,tareaSeleccionada}) =>{

    document.title = "Listar"
    
    //Funcion que elimina una tarea en especifico, llamada en el evento onclick de los botones eliminar
    const handleDeleteTask = (taskId) => {
        //Se utiliza el método filter() para crear un nuevo arreglo de tareas que 
        //excluye la tarea con el id especificado (taskId). Este método recorre todas 
        //las tareas en la lista y solo mantiene aquellas cuyo id sea diferente al taskId proporcionado.
        const updatedTasks = tareas.filter(tareas => tareas.id !== taskId);
        //se setan las tareas filtradas y se setean las tareas atraves del set que ingresa por parametros
        setTareas(updatedTasks);
    };

    return (

        <div className="p-5 d-flex flex-column gap-1">
            {tareas.length > 0 ? (
                <>
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
                        <div key={//aqui se asigna una clase que nos marcara la tarea buscada mientras se recorre la coleccion de tareas, si la tarea de la 
                            //coleccion tarea es la misma que la tarea seleccionada, se asigna la clase tareaResaltada, la cual marcara la tarea con una animacion, ver en ListarTareas.module.css
                             tarea.id} className={tarea === tareaSeleccionada ? style.tareaResaltada + " row p-2"  : style.fila + " row p-2"  }>
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
                </>
            ) : (
                <>
                    <Titulo titulo="NO tenes tareas, podes descansar crack!" />
                    <img src="https://i.pinimg.com/originals/4a/71/8c/4a718c4319e056b7637a9a029ce04f92.gif" alt="GIF de celebración" />
                </>
            )}
        </div>
    );
}

export default ListarTareas