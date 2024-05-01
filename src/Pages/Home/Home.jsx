import Header from "../../Components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import style from "./Home.module.css";
import AgregarTarea from "../../Components/AgregarTarea/AgregarTarea";
import ListarTareas from "../../Components/ListarTareas/ListarTareas";
import Index from "../Index/Index";
import Estados from "../../Components/Estados/Estados";

//Muy buen trabajo
//El drag and drop esta excelente.
//La ui esta hermosa, hubo mucho atencion a los detalles.
//Esta muy bien componetizado.
//Muy buen uso del css module

//Observaciones
//Si tienen varias paginas que se renderizan en distintas routes, coloquen esos archivos dentro de la carpeta pages. Deberian tener /Pages/Estados, /Pages/AgregarTarea y asi
//
//No son necesarios tantos comentarios, cuando el codigo esta bien escrito, con variables y funciones bien nombradas se entiende que es lo que hace sin agregar ruido.
//Podrian agregar algunas imagenes de como se ve la aplicacion corriendo al readme?
//Intenten instalar prettier o algun identador automatico para que el codigo quede mas ordenado y facil de leer.

const Home = () => {
  //useState de estado del sidebar
  const [openBar, setOpenBar] = useState(false);

  //Esta función se pasa como prop al Header y se
  //ejecuta cuando se hace clic en el botón de navegación.
  //Invierte el valor del estado openBar usando
  //setOpenBar y devuelve el nuevo valor.
  const navigatorNab = () => {
    setOpenBar(!openBar);
    return openBar;
  };

  //Esta funcion se encarga de calcular dinámicamente las clases CSS que se
  //aplicarán al contenedor del contenido principal. Estas clases
  //determinan la apariencia y el diseño del contenido principal,
  //especialmente en relación con el sidebar.
  const getClassMainContent = (navigatorNab) => {
    let clase = style.MainContent;
    if (openBar) {
      clase += " " + style.open;
    }
    return clase;
  };

  //useState de las tareas
  const [tasks, setTasks] = useState([]);
  //useState de las tareas seleccionada en el componente search
  const [taskSelect, setTaskSelect] = useState([]);

  console.log(tasks);
  console.log(taskSelect);

  return (
    <Router>
      {/* Envuelve toda la aplicación con el componente Router */}
      <Header
        setTareas={setTaskSelect}
        tareas={tasks}
        navigatorNab={navigatorNab}
      />{" "}
      {/* Componente Header */}
      <div className={style.sidebarContainer}>
        <Sidebar estado={openBar}></Sidebar>
        {/* Componente Sidebar */}
      </div>
      <div className={getClassMainContent()}>
        <Routes>
          {/* Componente que define las rutas de la aplicación. */}
          {/* Se definen múltiples <Route> que corresponden a las diferentes URL de la aplicación. */}
          <Route path="/" element={<Index task={tasks} />} />
          {/* Ruta para la página de inicio */}
          <Route
            path="/ListarTareas"
            element={
              <ListarTareas
                setTareaSeleccionada={setTaskSelect}
                tareaSeleccionada={taskSelect}
                setTareas={setTasks}
                tareas={tasks}
              />
            }
          />
          {/* Ruta para la página de listar tareas */}
          <Route
            path="/Estados"
            element={<Estados tasks={tasks} setTasks={setTasks} />}
          />
          {/* Ruta para la página de estados */}
        </Routes>
      </div>
      <AgregarTarea setTareas={setTasks} tareas={tasks} />{" "}
      {/* Componente AgregarTarea */}
    </Router>
  );
};

export default Home;
