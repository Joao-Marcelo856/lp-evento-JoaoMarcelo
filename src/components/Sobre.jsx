import { evento } from "./data/evento";

function Sobre() {
  return (
    <section id="sobre" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl font-extrabold">Sobre</h2>
      <p className="mt-4 max-w-3xl text-lg text-gray-600">{evento.sobre}</p>
      <div className="mt-8 grid grid-cols-3 gap-4 max-w-lg">
        {evento.numeros.map((n) => (
          <div
            key={n.rotulo}
            className="rounded-2xl bg-grafite p-6 text-center text-white"
          >
            <p className="text-3xl font-extrabold text-verde">{n.valor}</p>
            <p className="text-sm opacity-80">{n.rotulo}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Sobre;
