function Newsletter() {
  const [email, setEmail] = useState("");
  const [enviado, setEnviado] = useState(false);
  function enviar(e) {
    e.preventDefault(); // impede a página de recarregar
    setEnviado(true);
  }
  if (enviado) {
    return (
      <p role="status">Pronto! Vamos avisar {email} sobre a próxima feira.</p>
    );
  }
  return (
    <form onSubmit={enviar}>
      <label>
        E-mail
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <button type="submit">Quero receber</button>
    </form>
  );
}