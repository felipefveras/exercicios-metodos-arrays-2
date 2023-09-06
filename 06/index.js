const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]


const cidadesCaracteres = cidades.filter(function (elemento) {
    return elemento.length <= 8
})
console.log(cidadesCaracteres.join(", "))

