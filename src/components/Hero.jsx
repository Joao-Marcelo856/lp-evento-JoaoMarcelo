import Cabecalho from "./Cabecalho";
import { evento } from "./data/evento";

function Hero() {
  return (
    <section id="topo" className="bg-grafite text-white">
      <div className="px-4">
        <Cabecalho />
      </div>
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-12 text-center">
        <p className="mx-auto w-fit rounded-full border border-white/20 px-4 py-1 text-xs font-bold uppercase tracking-widest">
          📍 {evento.local} • {evento.data}
        </p>
        <h1 className="mt-6 text-4xl font-extrabold md:text-6xl">
          {evento.nome}
        </h1>
        <p className="mt-4 text-lg opacity-90">{evento.slogan}</p>
        <p className="mt-2 text-sm opacity-70">
          {evento.data} • {evento.horario}
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="#inscricao"
            className="rounded-xl bg-verde px-8 py-3 font-bold text-grafite"
          >
            Quero participar
          </a>
          <a
            href="#programacao"
            className="rounded-xl border border-white/30 px-8 py-3 font-bold"
          >
            Ver programação
          </a>
        </div>
      </div>
    </section>
  );
}
export default Hero;
