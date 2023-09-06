const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"]

const deixaMaiuscula = frutas.map(function (fruta, numero) {

    return numero + " - " + fruta.slice(0, 1).toUpperCase() + fruta.slice(1).toLowerCase()

})

console.log(deixaMaiuscula)


