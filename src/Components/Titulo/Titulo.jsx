import React from 'react'
import style from './Titulo.module.css'

const Titulo = (props) => {
    return (
        <h1 className={style.titulo}>{props.titulo}</h1>
    )
}

export default Titulo