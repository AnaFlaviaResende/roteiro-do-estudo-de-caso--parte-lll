export function CardAprovado({ nome, situacao }) {
  return (
    <div className="card-aprovado">
      <p>
        <strong>Nome:</strong> {nome}
      </p>
      <p>
        <strong>Situação:</strong> {situacao}
      </p>
    </div>
  );
}
