
import style from "./Button.module.css"
//retorna un boton con un estilo unico
//tiene como parametros el contenido, es decir el valor que se le dara al boton
//y una funcion que se le asigna al evento onClick 
const Button = ({content,onClick}) => {
    return (
        <button className={style.button} onClick={onClick} type="submit">{content}</button>
    );
}

export default Button