const numeros = [10, 987, -886, 0, 12, 199, -45, -67]

const numeroPositivo = numeros.filter(function (elemento) {
    return elemento > 0
})

console.log(numeroPositivo)
