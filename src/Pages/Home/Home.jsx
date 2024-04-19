import Header from '../../Components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import style from "./Home.module.css"
import AgregarTarea from '../../Components/AgregarTarea/AgregarTarea';
import ListarTareas from '../../Components/ListarTareas/ListarTareas';
import Index from '../Index/Index';

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

    const [tareas,setTareas] = useState([])

    console.log((tareas))

    
    return (
        
            <Router>

                <Header navigatorNab={navigatorNab}/>

                <div className={style.sidebarContainer}>
                    <Sidebar estado={openBar}></Sidebar>
                </div>

                <div className={getClassMainContent()}>
                    <Routes>
                        <Route path="/" element={<Index />} />
                        <Route path='/AgregarTarea' element={<AgregarTarea setTareas={setTareas} tareas={tareas}/>}/>
                        <Route path='/ListarTareas' element={<ListarTareas tareas={tareas}/>}/>
                    </Routes>
                </div>

            </Router>

    );
}

export default Home