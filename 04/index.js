const numeros = [0, 122, 4, 6, 10, 16, 44]

const pares = numeros.every(function (elementos) {
    return elementos % 2 === 0
})

if (pares === true) console.log('array valido')
else console.log('array invalido')

