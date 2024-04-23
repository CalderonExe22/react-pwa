import Header from '../../Components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import style from "./Home.module.css"
import AgregarTarea from '../../Components/AgregarTarea/AgregarTarea';
import ListarTareas from '../../Components/ListarTareas/ListarTareas';
import Index from '../Index/Index';
import Estados from '../../Components/Estados/Estados';

const Home = () =>{

    //useState de estado del sidebar
    const [openBar,setOpenBar] = useState(false)

    //Esta función se pasa como prop al Header y se 
    //ejecuta cuando se hace clic en el botón de navegación. 
    //Invierte el valor del estado openBar usando 
    //setOpenBar y devuelve el nuevo valor.
    const navigatorNab = () =>{
        setOpenBar(!openBar)
        return openBar
    }

    //Esta funcion se encarga de calcular dinámicamente las clases CSS que se
    //aplicarán al contenedor del contenido principal. Estas clases 
    //determinan la apariencia y el diseño del contenido principal, 
    //especialmente en relación con el sidebar.
    const getClassMainContent = (navigatorNab) =>{
        let clase = style.MainContent
        if(openBar){
            clase += " " + style.open 
        }
        return clase
    }

    //useState de las tareas 
    const [tasks, setTasks] = useState([]);
    //useState de las tareas seleccionada en el componente search
    const [taskSelect, setTaskSelect] = useState([]);

    console.log((tasks))
    console.log(taskSelect)
    

    return (
        
            <Router>

                <Header setTareas={setTaskSelect} tareas={tasks} navigatorNab={navigatorNab}/>

                <div className={style.sidebarContainer}>
                    <Sidebar estado={openBar}></Sidebar>
                </div>

                <div className={getClassMainContent()}>
                    <Routes>
                        <Route path="/" element={<Index task={tasks}/>} />
                        <Route path='/ListarTareas' element={<ListarTareas setTareaSeleccionada={setTaskSelect} tareaSeleccionada={taskSelect} setTareas={setTasks} tareas={tasks}/>}/>
                        <Route path="/Estados" element={<Estados tasks={tasks} setTasks={setTasks}/>} />
                    </Routes>
                </div>
                <AgregarTarea setTareas={setTasks} tareas={tasks}/>

            </Router>

    );
}

export default Home