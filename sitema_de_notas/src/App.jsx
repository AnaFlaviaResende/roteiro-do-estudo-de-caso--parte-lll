import "./App.css";
import { CardAprovado } from "./components/CardAprovado";
import { CardReprovado } from "./components/CardReprovado";

function App() {
  return (
    <>
      <div className="card-aluno">
        <h1>SITUAÇÃO DO ALUNO</h1>
        <CardAprovado />
        <CardReprovado />
      </div>
    </>
  );
}

export default App;
