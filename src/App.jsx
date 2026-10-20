import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Programacao from "./components/Programacao";
import Atracoes from "./components/Atracoes";
import Inscricao from "./components/Inscricao";
import Rodape from "./components/Rodape";

function App() {
  return (
    <>
      <Hero />
      <main>
        <Sobre />
        <Programacao />
        <Atracoes />
        <Inscricao />
      </main>
      <Rodape />
    </>
  );
}
export default App;