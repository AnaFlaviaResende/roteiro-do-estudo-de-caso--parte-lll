export function CardReprovado({ nome, situacao }) {
  return (
    <div className="card-reprovado">
      <p>
        <strong>Nome:</strong> {nome}
      </p>
      <p>
        <strong>Situação:</strong> {situacao}
      </p>
    </div>
  );
}