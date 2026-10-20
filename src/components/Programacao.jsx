import { programacao } from "./data/evento";

function Programacao() {
  return (
    <section id="programacao" className="bg-gray-50 px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-extrabold">Programação</h2>
        <div className="mt-6 overflow-hidden rounded-2xl border bg-white">
          <table className="w-full text-left text-sm">
            <thead className="bg-grafite text-white">
              <tr>
                <th className="p-3">Dia</th>
                <th className="p-3">Horário</th>
                <th className="p-3">Atividade</th>
              </tr>
            </thead>
            <tbody>
              {programacao.map((p, i) => (
                <tr key={i} className="border-t">
                  <td className="p-3 font-bold">{p.dia}</td>
                  <td className="p-3">{p.horario}</td>
                  <td className="p-3">{p.atividade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
export default Programacao;
