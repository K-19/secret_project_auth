import style from './App.module.css';
import Footer from "./Footer/Footer";
import Content from "./Content/Content";

function App() {
    return (
        <div className={style.app}>
            <Content/>
            <Footer/>
        </div>
    )
}

export default App;
