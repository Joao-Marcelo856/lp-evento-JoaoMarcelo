import { useState } from "react";
function BotaoLembrete() {
  const [mensagem, setMensagem] = useState("");
  async function ativarLembrete() {
    // 1. Verifica se o navegador suporta a API de Notificações
    if (!("Notification" in window)) {
      setMensagem("Este navegador não aceita notificações.");
      return;
    }

    // 2. Solicita permissão ao usuário (retorna uma Promise, usa await)
    const permissao = await Notification.requestPermission();

    // 3. Se a permissão não for concedida, encerra a função
    if (permissao !== "granted") {
      setMensagem("Você não permitiu as notificações.");
      return;
    }

    // 4. Aguarda o Service Worker ficar pronto
    const registro = await navigator.serviceWorker.ready;

    // 5. Exibe a notificação push com dados do evento
    await registro.showNotification("Lançamento do Evento", {
      body: "Não se esqueça: o evento começa em breve!",
      icon: "/icone-192.png",
    });

    // 6. Confirma na tela que o lembrete foi ativado
    setMensagem("Lembrete ativado!");
  }
  return (
    <div className="relative w-full sm:w-52">
      <button
        type="button"
        onClick={ativarLembrete}
        className="flex h-12 w-full items-center justify-center rounded-xl border border-white/30 bg-white/30 px-8 font-bold text-white"
      >
        Me lembre do evento
      </button>
      {mensagem && (
        <p role="status" className="absolute left-1/2 mt-2 w-max max-w-52 -translate-x-1/2 text-sm">
          {mensagem}
        </p>
      )}
    </div>
  );
}
export default BotaoLembrete;
