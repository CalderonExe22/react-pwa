
import { useState } from "react";
import { useEffect } from "react";
import Input from "../Input/Input";
import style from "./AgregarTarea.module.css"
import Button from "../Button/Button";

const AgregarTarea = ({tareas,setTareas}) =>{

    useEffect(() => {
        document.title = "Agregar Tarea"
    },[])

    const [inputValueDescripcion, setInputValueDescripcion] = useState("")
    const [inputValueTitulo, setInputValueTitulo] = useState("")

    const inputChangeDescripcion = (event) =>{
        setInputValueDescripcion(event.target.value)
    }
    const inputChangeTitulo = (event) =>{
        setInputValueTitulo(event.target.value)
    }

    const guardarTarea = () =>{
        const nuevaTarea = {
            id: Date.now(),
            titulo : inputValueTitulo,
            description : inputValueDescripcion,
            completed : "sin valor"
        };
        setTareas([...tareas,nuevaTarea])
        setInputValueDescripcion("")
        setInputValueTitulo("")
    }

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
          guardarTarea();
        }
      };

    console.log(inputValueDescripcion)
    console.log(inputValueTitulo)

    return (
        
        <div className={style.container}>
            
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                <div class="modal-content">

                    <div class="modal-header p-4">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">Comienza a Organizar tus tareas</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div class="modal-body d-flex flex-column p-5 gap-5">

                        <h4>Ingrese una tarea a realizar</h4>

                        <Input placeholder={"Titulo de tarea"} onKeyPress={handleKeyPress} type={"text"} value={inputValueTitulo} onChange={inputChangeTitulo}/>
                        <Input placeholder={"Descripcion"} onKeyPress={handleKeyPress} type={"text"} value={inputValueDescripcion} onChange={inputChangeDescripcion}/>
                                
                    </div>

                    <div class="modal-footer">
                        <Button content={"Agregar tarea"} onClick={guardarTarea}></Button></div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default AgregarTarea