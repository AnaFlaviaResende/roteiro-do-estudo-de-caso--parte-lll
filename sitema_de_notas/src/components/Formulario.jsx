import React, { useState } from "react";

function Formulario() {
  const [name, setName] = useState("");
  const [note1, setNote1] = useState("");
  const [note2, setNote2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nome:", name, "Nota 1:", note1, "Nota 2:", note2);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome do aluno"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Nota 1"
        value={note1}
        onChange={(e) => setNote1(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Nota 2"
        value={note2}
        onChange={(e) => setNote2(e.target.value)}
        required
      />
      <button type="submit">Calcular</button>
    </form>
  );
}

export default Formulario;
