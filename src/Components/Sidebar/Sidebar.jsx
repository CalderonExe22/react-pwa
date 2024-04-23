
import React from 'react';
import style from "./Sidebar.module.css"
import { Link } from 'react-router-dom';

//parametro estado = booleano
const Sidebar = ({estado}) => {

  //console.log(estado)

  //funcion la cual determina la clase del componente sidebar, segun el parametro 
  //estado, nos permitira ocultar y visualizar el sidebar de la pagina
  const getclaseSidebar = () =>{
    let clases = style.sidebar
    if(estado){
      clases += ' ' + style.open;
    }
    return clases
  }

  //coleccion de rutas
  const rutas = [{
    id:1,
    name : <span><i className="fa-solid fa-house me-2"></i>Inicio</span>,
    href : "/",
  },{
    id:2,
    name : <span><i className="fa-solid fa-list me-2"></i>Listar tareas</span>,
    href : "/ListarTareas"
  },{
    id:3,
    name : <span><i className="fa-solid fa-pen-to-square me-2"></i>Tablero</span>,
    href : "/Estados"
  }];

  console.log(getclaseSidebar())

  return (
    <div className={getclaseSidebar()}>
      
      <ul className={style.SidebarColor}>
        <h2><i className="fa-solid fa-gear m-2"></i>Tools</h2>
    
        {rutas.map(index => (
          /* <Link> es un componente que se utiliza para crear enlaces, utiliza el atributo "to" en lugar de "href" evitando que la pagina se recargue completamente */
          <li key={index.id}><Link className={style.links} to = {index.href} > {index.name}</Link></li> /* Crea un enlace para cada ruta */
        ))}
        <li><Link className={style.links} data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i className="fa-solid fa-arrow-up-from-bracket me-2"></i>Agregar Tarea</Link></li>{/* Enlace para agregar tarea */}
        </ul>
    </div>
  );
}

export default Sidebar;