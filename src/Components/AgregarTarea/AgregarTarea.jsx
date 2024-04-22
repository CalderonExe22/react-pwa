import React, { useState } from "react";
import style from "./AgregarTarea.module.css"
import Input from "../Input/Input";
import Button from "../Button/Button";

//recibe como parametro una coleccion de tareas justo a su set de useState
const AgregarTarea = ({tareas,setTareas}) =>{

    //titulo de la pagina
    document.title = "Agregar Tarea"

    //useState del input de descripcion de tarea
    const [inputValueDescripcion, setInputValueDescripcion] = useState("")
    //useState del input de titulo de tarea
    const [inputValueTitulo, setInputValueTitulo] = useState("")
    //useState del mensaje de de error para no dejar campos vacios
    const [error, setError] = useState("");

    //esta funcion nos seteara el estado del input descripcion
    //cada que ingresemos un valor por este
    const inputChangeDescripcion = (event) =>{
        setInputValueDescripcion(event.target.value);
        //Validamos que el input no este vacion y limpiamos la variable error con el set vacio
        if (error && event.target.value) {
            setError("");
        }
    }

    //esta funcion nos seteara el estado del input titulo
    //cada que ingresemos un valor por este
    const inputChangeTitulo = (event) =>{
        setInputValueTitulo(event.target.value);
        //Validamos que el input no este vacion y limpiamos la variable error con el set vacio
        if (error && event.target.value) {
            setError("");
        }
    }

    //funcion que nos permite guardar una tarea, asignada al evento onClick 88
    const guardarTarea = () =>{
        //validamos que los input no esten vacios, si lo estan seteamos el estado de error con el mensaje a continuacion
        if (!inputValueTitulo || !inputValueDescripcion) {
            setError("¡Ambos campos son obligatorios!");
            return;
        }
        //creamos un objeto para almacenar la nueva tarea
        const nuevaTarea = {
            id: Date.now(),//funcion que Devuelve el número de milisegundos transcurridos desde el 1 de enero de 1970 00:00:00 UTC hasta el momento actual, por lo tanto la id nunca sera la misma
            titulo : inputValueTitulo,
            description : inputValueDescripcion,
            completed : "sin valor"
        };

        //usando el set de collecion de tareas que ingresa por parametro
        //asignamos el nuevo objeto de tarea a la coleccios tareas que tambien ingresa por parametro en AgregarTarea
        setTareas([...tareas,nuevaTarea]);
        setInputValueDescripcion("");
        setInputValueTitulo("");
        setError("");
    }

    //funcion que se ejecuta al precionar la tecla enter, haciendo que esta ejecute la funcion guardar tarea
    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            guardarTarea();
        }
    };

    //console.log(inputValueDescripcion)
    //console.log(inputValueTitulo)
    //retornamos un modal proporcionado por boostrap
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