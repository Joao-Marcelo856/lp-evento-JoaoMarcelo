import { useState } from "react";
import { inscricoes, faqs } from "./data/evento";

function Inscricao() {
  
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [ingresso, setIngresso] = useState(inscricoes[0].titulo);
  const [quantidade, setQuantidade] = useState(1);
  const [erro, setErro] = useState("");
  const [enviado, setEnviado] = useState(null);

  
  const [aberta, setAberta] = useState(null);

  function enviar(e) {
    e.preventDefault();

    
    if (nome.trim().length < 3) {
      setErro("O nome precisa ter pelo menos 3 letras.");
      return;
    }
    setErro("");

    
    const escolhido = inscricoes.find((i) => i.titulo === ingresso);
    const total = escolhido.valor * quantidade;

    setEnviado({ nome, email, ingresso, quantidade, total });
  }

  return (
    <section id="inscricao" className="bg-grafite px-4 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-extrabold">Inscrições</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {inscricoes.map((i) => (
            <div
              key={i.titulo}
              className="rounded-2xl bg-white p-6 text-grafite"
            >
              <h3 className="font-bold">{i.titulo}</h3>
              <p className="text-2xl font-extrabold text-verde">{i.preco}</p>
              <p className="mt-2 text-sm text-gray-600">{i.descricao}</p>
            </div>
          ))}
        </div>

        {!enviado ? (
          <form onSubmit={enviar} className="mt-8 grid max-w-lg gap-3">
            <label className="grid gap-1">
              Nome
              <input
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Seu nome"
                className="rounded-xl px-4 py-3 text-grafite"
              />
            </label>
            <label className="grid gap-1">
              E-mail
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                className="rounded-xl px-4 py-3 text-grafite"
              />
            </label>
            <label className="grid gap-1">
              Ingresso
              <select
                value={ingresso}
                onChange={(e) => setIngresso(e.target.value)}
                className="rounded-xl px-4 py-3 text-grafite"
              >
                {inscricoes.map((i) => (
                  <option key={i.titulo} value={i.titulo}>
                    {i.titulo} — {i.preco}
                  </option>
                ))}
              </select>
            </label>
            <label className="grid gap-1">
              Quantidade
              <input
                type="number"
                min="1"
                max="10"
                value={quantidade}
                onChange={(e) => setQuantidade(Number(e.target.value))}
                className="rounded-xl px-4 py-3 text-grafite"
              />
            </label>

            {erro && (
              <p role="alert" className="text-sm font-bold text-red-400">
                {erro}
              </p>
            )}

            <button
              type="submit"
              className="rounded-xl bg-verde px-6 py-3 font-bold text-grafite"
            >
              Confirmar inscrição
            </button>
          </form>
        ) : (
          <p
            role="status"
            className="mt-8 rounded-xl bg-verde p-4 font-bold text-grafite"
          >
            Valeu, {enviado.nome}! Você escolheu {enviado.quantidade}x{" "}
            {enviado.ingresso} — Total:{" "}
            {enviado.total === 0 ? "gratuito" : `R$ ${enviado.total}`} · Vamos
            avisar {enviado.email} 🕹️
          </p>
        )}

        <h3 className="mt-12 text-2xl font-bold">Perguntas frequentes</h3>
        <ul className="mt-4 space-y-3">
          {faqs.map((f, i) => (
            <li key={f.pergunta} className="rounded-xl bg-white/10 p-4">
              <button
                type="button"
                onClick={() => setAberta(aberta === i ? null : i)}
                className="w-full text-left font-bold"
              >
                {aberta === i ? "− " : "+ "}
                {f.pergunta}
              </button>
              {aberta === i && <p className="mt-2 opacity-80">{f.resposta}</p>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
export default Inscricao;
