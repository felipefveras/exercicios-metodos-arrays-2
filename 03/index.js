const palavras = ["arroz", "feijão", "carne", "macarrão"]

const validaBebidas = palavras.some(function (itens) {
    return itens === 'cerveja' || itens === 'vodka'
})

if (validaBebidas === true) {
    console.log("revise sua lista. joão possui bebidas com venda proibida")
} else {
    console.log('tudo certo, vamos as compras, uiuiui aiai')
}
