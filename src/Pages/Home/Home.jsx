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

    const [openBar,setOpenBar] = useState(false)

    const navigatorNab = () =>{
        setOpenBar(!openBar)
        return openBar
    }

    const getClassMainContent = (navigatorNab) =>{
        let clase = style.MainContent
        if(openBar){
            clase += " " + style.open 
        }
        return clase
    }

    const [tasks, setTasks] = useState([]);

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