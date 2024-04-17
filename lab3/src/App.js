import logo from "./logo.svg";
import "./App.css";
import Formulir from "./Pertemuan1Praktikum/Formulir";
import MyProfile from "./Pertemuan2Praktikum/MyProfile";
import Profile from "./Pertemuan2Praktikum/Profile";
import LayoutInit from "./Messenger/Components/LayoutInit";
import { BrowserRouter } from "react-router-dom";
import BaseRoute from "./Messenger/Components/BaseRoute";

function App({ basename }) {
  return (
    <BrowserRouter>
        <BaseRoute />
    </BrowserRouter>
  );
}

export default App;
