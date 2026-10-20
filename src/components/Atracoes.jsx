import { mentores } from "./data/evento";
import CartaoAutor from "./CartaoAutor";

function Atracoes() {
  return (
    <section id="mentores" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl font-extrabold">Mentores</h2>
      <p className="mt-2 text-gray-600">
        Disponíveis o tempo todo durante as 48h.
      </p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {mentores.map((m) => (
          <CartaoAutor
            key={m.nome}
            nome={m.nome}
            area={m.area}
            descricao={m.descricao}
          />
        ))}
      </div>
    </section>
  );
}
export default Atracoes;
