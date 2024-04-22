import React, { useState } from "react";
import style from "./AgregarTarea.module.css"
import Input from "../Input/Input";
import Button from "../Button/Button";

const AgregarTarea = ({tareas,setTareas}) =>{

    
    document.title = "Agregar Tarea"

    const [inputValueDescripcion, setInputValueDescripcion] = useState("")
    const [inputValueTitulo, setInputValueTitulo] = useState("")
    const [error, setError] = useState("");

    const inputChangeDescripcion = (event) =>{
        setInputValueDescripcion(event.target.value);
        if (error && event.target.value) {
            setError("");
        }
    }
    const inputChangeTitulo = (event) =>{
        setInputValueTitulo(event.target.value);
        if (error && event.target.value) {
            setError("");
        }
    }

    const guardarTarea = () =>{
        if (!inputValueTitulo || !inputValueDescripcion) {
            setError("¡Ambos campos son obligatorios!");
            return;
        }
        const nuevaTarea = {
            id: Date.now(),
            titulo : inputValueTitulo,
            description : inputValueDescripcion,
            completed : "sin valor"
        };
        setTareas([...tareas,nuevaTarea]);
        setInputValueDescripcion("");
        setInputValueTitulo("");
        setError("");
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
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header p-4">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Comienza a Organizar tus tareas</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body d-flex flex-column p-5 gap-5">
                            <h4>Ingrese una tarea a realizar</h4>
                            <Input placeholder={"Titulo de tarea"} onKeyPress={handleKeyPress} type={"text"} value={inputValueTitulo} onChange={inputChangeTitulo}/>
                            <Input placeholder={"Descripcion"} onKeyPress={handleKeyPress} type={"text"} value={inputValueDescripcion} onChange={inputChangeDescripcion}/>
                            {error && <span style={{ color: "red" }}>{error}</span>} {/* Mostrar mensaje de error si existe */}
                        </div>
                        <div className="modal-footer">
                            <Button content={"Agregar tarea"} onClick={guardarTarea} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default AgregarTarea