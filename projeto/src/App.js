import React, { useState, useEffect } from "react";

const App = () => {
  const [usuario, setUsuario] = useState("");
  const [count, setCount] = useState(0);
  const [usuarios, setUsuarios] = useState(["Diego", "Milena", "Arthur"]);

  const handleAddUser = () => {
    setUsuarios([...usuarios, usuario]);
    setUsuario("");
  };

  useEffect(() => {
    setCount(usuarios.length);

  }, [usuarios]);

  return (
    <div className="App">
      <h1>Hello DIO!</h1>
      <h3>Total = {count}</h3>
      <div>
        <input
          value={usuario}
          onChange={(event) => setUsuario(event.target.value)}
        ></input>
        <button onClick={handleAddUser}>Adicionar</button>
      </div>
      <hr />
      {usuarios.map((iten) => {
        return <p>{iten}</p>;
      })}
    </div>
  );
};

export default App;
