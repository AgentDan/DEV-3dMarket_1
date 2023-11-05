import './App.css';
import Menu from "./components/Menu/Menu";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <>
            <BrowserRouter>
                <Menu/>
            </BrowserRouter>
        </>
    );
}

export default App;
