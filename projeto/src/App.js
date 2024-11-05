import React, { useState, useEffect } from "react";

const App = () => {
  const [usuarios, setUsuario] = useState([
    "Diego",
    "Milena",
    "Arthur",
    "Chloe",
  ]);


//   useEffect(()=>{

//     setTimeout(()=>{
//         setUsuario([...usuarios, "Familia Feliz <3"])
//     },)
//   })

  return (
    <div>
      <h1>Hello DIO!</h1>
      {usuarios.map((iten) => (
        <p>{iten}</p>
      ))}
    </div>
  );
};

export default App;
