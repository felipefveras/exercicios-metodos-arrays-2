const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia']
const nomeDoLivro = "Cem Anos de Solidão"

const posicaoLivro = livros.findIndex(function (livro) {
    return livro === nomeDoLivro
}, nomeDoLivro)

console.log(`o livro está na posição ${posicaoLivro + 1}`)