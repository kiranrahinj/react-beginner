import React, { useState, useEffect } from "react";

const User = (props) => {
  const [planet, setPlanet] = useState("earth");

  //component did mount
  useEffect(() => {
 //   setPlanet("mars");

    console.log("component mounting");
    return console.log("bye bye");
    
  },[]);
  //component did update
  //should component update
  useEffect(()=>{
    console.log("planet changes");
   

  },[planet]);

  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.desc}</p>
      <button onClick={()=>setPlanet("pluto")}>{planet}</button >

    </div>
  );
};

export default User;
