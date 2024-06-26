
import style from "./TarjetaTask.module.css"

const TarjetaTask = ({titulo,descripcion,keyId,draggable,onDragStart}) =>{

    return(
        <div onDragStart={onDragStart} draggable={draggable} id={keyId} className={style.tarjeta + " d-flex flex-column align-items-start p-3 gap-3"}>
            <h3>{titulo}</h3>
            <p>{descripcion}</p>
        </div>
    );
}

export default TarjetaTask