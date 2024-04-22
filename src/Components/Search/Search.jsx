import {  useEffect, useState } from "react";
import style from "./Search.module.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Search = ({ tareas, setTareaSeleccionada}) => {


    const [busqueda, setBusqueda] = useState("");
    const [filtrarBusqueda, setFiltrarBusqueda] = useState(tareas);
    const Navegation = useNavigate()
    const location = useLocation();
    
    console.log("Ruta actual:", location.pathname.toLowerCase())

    useEffect (()=>{
        if(location.pathname.toLowerCase() !== "/listartareas"){
        setTareaSeleccionada(null)
    }
    },[location.pathname,setTareaSeleccionada])
    
    
    const verTarea = (tarea) =>{
        setTareaSeleccionada(tarea)
        // Redirigir a la página ListarTareas con la tarea seleccionada como parámetro de ruta
        Navegation(`/ListarTareas`);
        setBusqueda("")
    }

    const handleBusqueda = (event) => {
        const valueBusqueda = event.target.value;
        setBusqueda(valueBusqueda);
        const tareasFiltradas = tareas.filter(tarea =>
            tarea.description.toLowerCase().includes(valueBusqueda.toLowerCase())
        );
        setFiltrarBusqueda(tareasFiltradas)
    };

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
                {
                    filtrarBusqueda.map(tarea =>(
                        <li key={tarea.id} onClick={()=> verTarea(tarea)}>{tarea.description}</li>
                    ))
                }
            </ul>
            </div>
            
        
        </div>
    </div>
  );
};

export default Search;



