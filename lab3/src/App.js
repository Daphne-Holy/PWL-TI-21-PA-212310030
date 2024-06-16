import logo from "./logo.svg";
import "./App.css";
import Formulir from "./Pertemuan1Praktikum/Formulir";
import MyProfile from "./Pertemuan2Praktikum/MyProfile";
import Profile from "./Pertemuan2Praktikum/Profile";
import LayoutInit from "./Messenger/Components/LayoutInit";
import { BrowserRouter } from "react-router-dom";
import BaseRoute from "./Messenger/Components/BaseRoute";
import Sentiment from "sentiment";

function App({ basename }) {
  // const createSessionStorage = () => {
  //   sessionStorage.setItem("token", "12345");
  //   alert("success save token to sessionStorage");
  // };

  // const removeSessionStorage = () => {
  //   sessionStorage.removeItem("token");
  //   alert("success remove token to sessionStorage");
  // };

  // const createLocalStorage = () => {
  //   localStorage.setItem("token", "54321");
  //   alert("success save token to sessionStorage");
  // };

  // const removeLocalStorage = () => {
  //   localStorage.removeItem("token");
  //   alert("success remove token to sessionStorage");
  // };

  return (
    // <>
    //   <button onClick={createSessionStorage}>Set token sessionStorage</button>
    //   <div>{sessionStorage.getItem("token")}</div>
    //   <button onClick={removeSessionStorage}>
    //     delete token sessionStorage
    //   </button>

    //   <h1>localStorage</h1>

    //   <button onClick={createLocalStorage}>Set token localStorage</button>
    //   <div>{localStorage.getItem("token")}</div>
    //   <button onClick={removeLocalStorage}>delete token localStorage</button>
    // </>
    <BrowserRouter>
      <BaseRoute />
    </BrowserRouter>
  );
}

export default App;
