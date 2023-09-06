const palavras = ["livro", "caneta", "sol", "carro", "orelha"]

const acharPalavra = palavras.some(function (palavra) {
    return palavra.length > 5
})

if (acharPalavra) console.log('existe palavra invalida')
else console.log('array validado')
