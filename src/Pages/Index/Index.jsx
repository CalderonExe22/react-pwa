import { useEffect } from "react";


const Index = () =>{

    useEffect(() => {
        document.title = "Inicio"
    },[])

    return (

        <div className="row d-flex text-center p-5">

            <div className="">
                <h1>Bienvenido</h1>
            </div>
            
        </div>
    );
}

export default Index