import style from "./Content.module.css";
import Logo from "./Logo/Logo";
import InputPanel from "./InputPanel/InputPanel";
import Buttons from "./Buttons/Buttons";


const Content = () => {
    return (
        <div className={style.content}>
            <div className={style.identification}>
                <Logo/>
                <InputPanel/>
                <Buttons/>
            </div>
        </div>
    )
}

export default Content;