import "./App.css";
import { CardAprovado } from "./components/CardAprovado";
import { CardReprovado } from "./components/CardReprovado";
import Formulario from "./components/Formulario";


export function App() {
  return (
    <>
      <div className="card-aluno">
        <h1>SITUAÇÃO DO ALUNO</h1>
        <div>
          <Formulario/>
          <CardAprovado nome="João Silva" situacao="Aprovado" />
          <CardReprovado nome="João Silva" situacao="Reprovado" />
        </div>
      </div>
    </>
  );
}

export default App;
