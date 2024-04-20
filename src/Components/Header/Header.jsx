
import { Link } from 'react-router-dom';
import style from "./Header.module.css";
import Search from '../../Components/Search/Search';

const Header = ({navigatorNab}) =>{

    // Se crea una variable constante llamada rutas, las cual es una collecion que contiene objetos en donde se especifican el 
    //nombre de la ruta y su respectivo href
    const rutas = [{
        name : "Search",
        href : "/Search"
    },{
        name : "Contactos",
        href : "/contact"
    }];

    return ( 
        
        <header className="row p-3 m-0">
            <nav class="col-4 d-flex justify-c ontent-left align-items-center">
                <button className={style.sidebar} onClick={navigatorNab}><i class="fa-solid fa-bars"></i></button>
                <h2 className='ms-4'>To-do lists</h2>
            </nav>

            <nav class="col-4 d-flex justify-content-center align-items-center">
                <Search></Search>
            </nav>
                
            <nav className={style.containerLinks} class="col-4 d-flex justify-content-evenly">    
                {   
                    //se utiliza la funcion map de js para recorrer la coleccion de rutas anteriormente especificada 
                    rutas.map(index => (
                        <Link className={style.linkStyle} to = {index.href} > {index.name}</Link>
                    ))
                }
            </nav>
        </header>

    );

    
}

export default Header