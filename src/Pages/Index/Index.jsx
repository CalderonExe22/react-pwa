import { useEffect } from "react";
import TaskCounter from "../../Components/TaskCounter/TaskCounter";

const Index = ({task}) =>{

    useEffect(() => {
        document.title = "Inicio"
    },[])

    return (

        <div className="row d-flex justify-content-center text-center gap-5 p-5">
            <h1>Bienvenido de nuevo!</h1>
            <TaskCounter tasks={task}></TaskCounter>
                
        </div>
    );
}

export default Index