let livros = [];
const endpoint = "https://guilhermeonrails.github.io/casadocodigo/livros.json";
getBuscarLivros();

async function getBuscarLivros() {
  try {
    const res = await fetch(endpoint);
    livros = await res.json();
    let livrosComDesconto = aplicarDesconto(livros)
    exibirLivros(livrosComDesconto);
  } catch (error) {
    console.log(error)
  }
}
