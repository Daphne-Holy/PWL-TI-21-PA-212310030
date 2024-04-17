import React from "react";
import MyBio from "./Mybio";

export default function Profile() {
  const ClickMe = ({ children, onClickBtn }) => {
    return (
      <button type="button" onClick={() => onClickBtn()}>
        {children}
      </button>
    );
  };

  const myData = {
    name: "M Rafi Z A",
    age: 20,
  };

  const HandlerHitme = () => {
    alert("Anda telah mengetuk saya");
  };

  return (
    <div>
      <h1>Biodata:</h1>
      <ClickMe onClickBtn={HandlerHitme}>Klik Saya!</ClickMe>
    </div>
  );
}
