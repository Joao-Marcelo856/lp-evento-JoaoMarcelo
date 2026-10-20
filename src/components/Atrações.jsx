function autores() {
  return (
    <ul>
      {autores.map((autor) => (
        <li key={autor.nome}>
          {autor.nome} — {autor.genero}
        </li>
      ))}
    </ul>
  );
}