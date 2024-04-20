
import style from "./Button.module.css"

const Button = ({content,onClick}) => {
    return (
        <button className={style.button} onClick={onClick} type="submit">{content}</button>
    );
}

export default Button