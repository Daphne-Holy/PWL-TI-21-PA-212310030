import React from "react";

const Expression = () => {
  const time = new Date();
  function myName() {
    return "Daphne H.";
  }

  const CurrCourse = () => {
    return <h3>PWL</h3>
  };
  return (
    <div>
      <h1>The time now is {time.toTimeString()}</h1>
      <h2>My Name is {myName()}</h2>
      {CurrCourse()}
    </div>
  );
};

export default Expression;
