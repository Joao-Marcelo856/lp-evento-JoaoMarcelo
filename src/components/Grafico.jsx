import { useEffect, useRef } from "react";
const dados = [
  // 3 itens do seu evento, ex.: ingressos vendidos por tipo, inscritos por percurso...
  { rotulo: "Item A", valor: 120 },
  { rotulo: "Item B", valor: 80 },
  { rotulo: "Item C", valor: 45 },
];
function Grafico() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    const maior = Math.max(...dados.map((d) => d.valor));
    dados.forEach((item, i) => {
      const largura = (item.valor / maior) * 220; // a maior barra tem 220px
      const y = 20 + i * 50; // cada barra 50px abaixo da anterior

      // 1. escolha a cor da barra (use a cor do seu evento)
      ctx.fillStyle = "#1d4ed8";
      // 2. desenhe a barra com fillRect, começando em x = 110
      ctx.fillRect(110, y, largura, 30);
      // 3. troque a cor para escuro e escreva o rótulo em x = 10
      ctx.fillStyle = "#111827";
      ctx.font = "16px sans-serif";
      ctx.fillText(item.rotulo, 10, y + 20);
      // 4. escreva o valor logo depois do fim da barra
      ctx.fillText(item.valor, 120 + largura, y + 20);
    });
  }, []);
  return (
    <section className="px-4 py-16">
      <h2 className="text-3xl font-bold">Título do gráfico</h2>
      <canvas
        ref={canvasRef}
        width={380}
        height={170}
        role="img"
        aria-label="Descreva aqui o que o gráfico mostra, com os números"
        className="mt-6 max-w-full"
      />
    </section>
  );
}
