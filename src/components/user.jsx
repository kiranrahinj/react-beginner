import React, { useState, useEffect } from "react";

const User = (props) => {
  const [planet, setPlanet] = useState("earth");

  useEffect(() => {
    console.log("component is mounting");

    return console.log("by bye");
  }, []);

  useEffect(() => {
    console.log("planet is changes");
  },[planet]);

  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.desc}</p>
      <button onClick={() => setPlanet("jupiter")}>{planet}</button>
    </div>
  );
};

export default User;
