

const ListarTareas = ({tareas}) =>{

    return (

        <div className="p-5">
            <h2>Listado de Tareas</h2>
            <ul>
                {tareas.map((tarea) => (
                    <li>{tarea.description}</li>
                ))}
            </ul>
        </div>
    );
}

export default ListarTareas