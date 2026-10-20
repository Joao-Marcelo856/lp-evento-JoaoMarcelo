import { evento } from "./data/evento";

function Rodape() {
  return (
    <footer className="border-t px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 md:flex-row">
        <div>
          <p className="text-lg font-extrabold">🎮 {evento.nome}</p>
          <p className="text-sm text-gray-600">
            {evento.data} • {evento.horario}
          </p>
          <p className="text-sm text-gray-600">{evento.local}</p>
        </div>
        <nav className="flex gap-4 text-sm">
          <a href="#sobre" className="hover:underline">
            Sobre
          </a>
          <a href="#programacao" className="hover:underline">
            Programação
          </a>
          <a href="#inscricao" className="hover:underline">
            Inscrição
          </a>
        </nav>
      </div>
      <p className="mt-8 text-center text-xs text-gray-500">
        © 2027 {evento.nome} — Feito com React + Tailwind
      </p>
    </footer>
  );
}
export default Rodape;
