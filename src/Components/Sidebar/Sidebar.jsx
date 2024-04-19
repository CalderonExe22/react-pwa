
import React from 'react';
import style from "./Sidebar.module.css"
import { Link } from 'react-router-dom';

const Sidebar = ({estado}) => {

  console.log(estado)

  const getclaseSidebar = () =>{
    let clases = style.sidebar
    if(estado){
      clases += ' ' + style.open;
    }
    return clases
  }

  const rutas = [{
    name : <span><i class="fa-solid fa-house me-2"></i>Inicio</span>,
    href : "/"
  },{
      name : <span><i class="fa-solid fa-arrow-up-from-bracket me-2"></i>Agregar tarea</span>,
      href : "/AgregarTarea"
  },{
    name : <span><i class="fa-solid fa-list me-2"></i>Listar tareas</span>,
    href : "/ListarTareas"
}];

  console.log(getclaseSidebar())

  return (
    <div className={getclaseSidebar()}>
      
      <ul className={style.SidebarColor}>
        <h2><i class="fa-solid fa-gear m-2"></i>Tools</h2>
        {rutas.map(index => (
          <li><Link className={style.links} to = {index.href} > {index.name}</Link></li>
        ))}
        </ul>
    </div>
  );
}

export default Sidebar;