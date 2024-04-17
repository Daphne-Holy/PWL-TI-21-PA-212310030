import React from "react";
import { NavLink } from "react-router-dom";
export default function Headers() {
  return (
    <header
      className="navbar navbar-expand-lg bg-primary bg-gradient sticky-top"
      style={{ background: "linear-gradient(to right, #007bff, #00bfff)" }}
    >
      <div className="container-fluid">
        <h1 className="fw-bold">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6c/LOGO_IBIK.png"
            height={48}
            width={48}
            className=""
            alt=""
          />
          IBI Kesatuan
        </h1>

        <div>
          <ul className="navbar-nav">
            <NavLink className="nav-link active" to={"/home"} title="home">
              Home
            </NavLink>
            <li className="nav-link">-</li>
            <li>
              <NavLink className="nav-link active" to={"/chapter-two"} title="chapter two">
                Messagers
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
