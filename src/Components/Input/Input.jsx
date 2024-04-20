

import style from "./Input.module.css"

const Input = ({value,onChange,type}) =>{
    
    return (
        <input className={style.input} type={type} value={value} onChange={onChange} />
    )
}

export default Input