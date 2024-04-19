
import { useState } from "react";
import { useEffect } from "react";
const AgregarTarea = ({tareas,setTareas}) =>{

    useEffect(() => {
        document.title = "Agregar Tarea"
    },[])

    const [inputValue, setInputValue] = useState("")

    const inputChange = (event) =>{
        setInputValue(event.target.value)
    }

    const guardarTarea = () =>{
        const nuevaTarea = {
            description : inputValue
        };
        setTareas([...tareas,nuevaTarea])
    }

    console.log(inputValue)

    return (
        <div className="p-5">
            <input value={inputValue} onChange={inputChange} />
            <button onClick={guardarTarea}>Agregar tarea</button>
        </div>
    );
}

export default AgregarTarea