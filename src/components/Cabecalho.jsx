import { useState } from "react";
import { evento } from "./data/evento";

export default function Cabecalho() {
  const [aberto, setAberto] = useState(false);

  return (
    <header className="mx-auto max-w-6xl py-4">
      <div className="flex items-center justify-between">
        <a href="#topo" className="text-lg font-extrabold">
          🎮 {evento.nome}
        </a>

        {/* links desktop */}
        <nav className="hidden gap-6 text-sm font-medium md:flex">
          <a
            href="#sobre"
            className="opacity-80 hover:opacity-100 hover:underline"
          >
            Sobre
          </a>
          <a
            href="#programacao"
            className="opacity-80 hover:opacity-100 hover:underline"
          >
            Programação
          </a>
          <a
            href="#mentores"
            className="opacity-80 hover:opacity-100 hover:underline"
          >
            Mentores
          </a>
          <a
            href="#inscricao"
            className="opacity-80 hover:opacity-100 hover:underline"
          >
            Inscrição
          </a>
        </nav>

        <div className="flex gap-2">
          <a
            href="#inscricao"
            className="hidden rounded-full bg-verde px-4 py-2 text-sm font-bold text-grafite sm:block"
          >
            Garantir vaga
          </a>
          {/* botão só no celular */}
          <button
            type="button"
            onClick={() => setAberto(!aberto)}
            className="rounded-full border border-white/30 px-4 py-2 text-sm font-bold md:hidden"
          >
            {aberto ? "Fechar" : "Menu"}
          </button>
        </div>
      </div>

      {/* lista que abre/fecha no celular */}
      {aberto && (
        <nav className="mt-4 flex flex-col gap-3 rounded-xl bg-white/10 p-4 text-sm font-medium md:hidden">
          <a href="#sobre" onClick={() => setAberto(false)}>
            Sobre
          </a>
          <a href="#programacao" onClick={() => setAberto(false)}>
            Programação
          </a>
          <a href="#mentores" onClick={() => setAberto(false)}>
            Mentores
          </a>
          <a href="#inscricao" onClick={() => setAberto(false)}>
            Inscrição
          </a>
        </nav>
      )}
    </header>
  );
}
