
import { useState } from "react";
import { useEffect } from "react";
import Input from "../Input/Input";
import style from "./AgregarTarea.module.css"

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
        setInputValue("")
    }

    console.log(inputValue)

    return (
        <div id={style.container} className="p-5 w-50 d-flex flex-column justify-content-center align-items-center">
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Comienza a Organizar tus tareasModal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                        <Input value={inputValue} onChange={inputChange}/>
                        <Input  value={inputValue} onChange={inputChange} />
                        <button onClick={guardarTarea}>Agregar tarea</button>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Understood</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default AgregarTarea