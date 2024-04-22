import {  useEffect, useState } from "react";
import style from "./Search.module.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Search = ({ tareas, setTareaSeleccionada}) => {


    const [busqueda, setBusqueda] = useState("");
    const [filtrarBusqueda, setFiltrarBusqueda] = useState(tareas);
    // Esta navegar a la ruta que se le indique por parametro 
    const Navegation = useNavigate()
    //Se utiliza useLocation para obtener la ruta actual, funcion de react router dom
    const location = useLocation();
    
    console.log("Ruta actual:", location.pathname.toLowerCase())
    
    //useEffect se utiliza para limpiar la tarea seleccionada (setTareaSeleccionada(null)) cuando la ruta actual no es /listartareas cada que se reenderiza 
    //el search.jsx
    useEffect (()=>{
        if(location.pathname.toLowerCase() !== "/listartareas"){
        setTareaSeleccionada(null)
    }
    },[location.pathname,setTareaSeleccionada])
    
    //Esta función se activa cuando se hace clic en una tarea filtrada. 
    //Establece la tarea seleccionada y redirige al usuario a la página 
    //ListarTareas con la tarea seleccionada como parámetro de ruta.
    const verTarea = (tarea) =>{
        setTareaSeleccionada(tarea)
        // Redirigir a la página ListarTareas con la tarea seleccionada como parámetro de ruta
        Navegation(`/ListarTareas`);
        setBusqueda("")
    }

    // Funcion la cual actualiza el estado del input busqueda con el nuevo valor 
    //del campo de búsqueda y filtrar las tareas según el valor de búsqueda ingresado por el usuario
    const handleBusqueda = (event) => {
        const valueBusqueda = event.target.value;
        setBusqueda(valueBusqueda);
        const tareasFiltradas = tareas.filter(tarea =>
            tarea.titulo.toLowerCase().includes(valueBusqueda.toLowerCase())
        );
        setFiltrarBusqueda(tareasFiltradas)
    };

    //funcion que nos permite ver los resultado de busqueda asignando la clase results, el cual 
    //nos permite ver la lista de tareas
    const mostrarFiltro = ()=>{
        let filtro = style.resultsNone
        if(busqueda !== ""){
            filtro = style.results
        }
        return filtro
    }

    console.log(busqueda)
    console.log(filtrarBusqueda)

  return (
    <div className="d-flex flex-column">
      <input value={busqueda} onChange={handleBusqueda} placeholder="Buscar" className={style.buscador} type="search"/>
        <div className={style.filtro}>
            <div className={mostrarFiltro()}>
                <ul>
                    <li className="mt-4"><h5><strong>tareas...</strong></h5></li>
                {
                    filtrarBusqueda.map(tarea =>(
                        <li className={style.liResults} key={tarea.id} onClick={()=> verTarea(tarea)}>{tarea.titulo}</li>
                    ))
                }
            </ul>
            </div>
            
        
        </div>
    </div>
  );
};

export default Search;



