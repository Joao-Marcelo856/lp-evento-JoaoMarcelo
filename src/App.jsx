import Hero from "./components/Hero";
import CartaoAutor from "./components/CartaoAutor";
import { evento, autores } from "./components/data/evento";

function App() {
  return (
    <main>
      <Hero />

      <footer>
        {evento.nome} · {evento.data}
      </footer>

      <ul>
        {autores.map((autor) => (
          <li key={autor.nome}>
            {autor.nome} — {autor.genero}
          </li>
        ))}
      </ul>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {autores.map((autor) => (
          <CartaoAutor key={autor.nome} nome={autor.nome} genero={autor.genero} />
        ))}
      </div>
    </main>
  );
}

export default App;