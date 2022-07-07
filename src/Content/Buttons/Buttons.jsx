import style from './Buttons.module.css'

const Buttons = () => {
    return (
        <div className={style.buttonPanel}>
            <button className={style.regButton}>Регистрация</button>
            <button className={style.passButton}>Забыли пароль?</button>
        </div>
    )
}

export default Buttons;