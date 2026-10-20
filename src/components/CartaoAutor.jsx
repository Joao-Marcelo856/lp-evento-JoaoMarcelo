function CartaoAutor({ nome, area, descricao }) {
  return (
    <article className="rounded-xl bg-white p-6 shadow border">
      <h3 className="text-xl font-bold">{nome}</h3>
      <p className="text-sm font-bold text-ciano">{area}</p>
      <p className="mt-2 text-gray-600">{descricao}</p>
    </article>
  );
}
export default CartaoAutor;
