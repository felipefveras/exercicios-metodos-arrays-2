const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44]

const numeroPar = numeros.filter(function (elemento) {
    return elemento % 2 === 0
})

console.log(numeroPar)
