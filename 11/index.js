const nomes = [
    "Maria",
    "João",
    "José",
    "Antonio",
    "Beatriz",
    "Camila",
    "amanda",
]

const filtroNomes = nomes.filter(function (elemento) {
    return elemento.slice(0, 1) === 'a' || elemento.slice(0, 1) === 'A'
})

console.log(filtroNomes)