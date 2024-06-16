// import logo from './logo.svg';
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import LayoutInit from "./Widget/components/LayoutInit";
import BaseRoute from "./apps/BaseRoute";

function App() {
  return (
    <BrowserRouter>
      <LayoutInit>
        <BaseRoute />
      </LayoutInit>
    </BrowserRouter>
  );
}

export default App;