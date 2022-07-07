import style from './InputPanel.module.css'

const InputPanel = () => {
    return (
        <div className={style.main}>
            <div className={style.inputs}>
                <div className={style.inputLogin}>
                    <input placeholder='Логин'/>
                </div>
                <br/>
                <div className={style.inputPassword}>
                    <input placeholder='Пароль'/>
                </div>
            </div>
            <div className={style.enterButton}>
                <button/>
            </div>
        </div>
    )
}

export default InputPanel;