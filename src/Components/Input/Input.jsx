

import style from "./Input.module.css"

const Input = ({value,onChange,onKeyPress,type,placeholder}) =>{
    
    return (
        <input placeholder={placeholder} onKeyDown={onKeyPress} className={style.input} type={type} value={value} onChange={onChange} />
    )
}

export default Input