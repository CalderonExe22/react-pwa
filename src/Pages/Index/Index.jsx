import React, { useEffect } from "react";
import TaskCounter from "../../Components/TaskCounter/TaskCounter";
import Titulo from "../../Components/Titulo/Titulo"

const Index = ({task}) =>{

    useEffect(() => {
        document.title = "Inicio"
    },[])

    return (
        <div className="row d-flex justify-content-center text-center gap-5 p-5 m-0">
            <Titulo titulo="Bienvenido de nuevo!" />
            <TaskCounter tasks={task}></TaskCounter>
                
        </div>
    );
}

export default Index