const usuarios = [
  {
    nome: "André",
    idade: 29,
    habilitado: false,
  },
  {
    nome: "Marcos",
    idade: 70,
    habilitado: true,
  },
  {
    nome: "Ana",
    idade: 35,
    habilitado: true,
  },
  {
    nome: "Vinícius",
    idade: 44,
    habilitado: true,
  },
  {
    nome: "Carlos",
    idade: 17,
    habilitado: false,
  },
  {
    nome: "Maria",
    idade: 19,
    habilitado: true,
  },
]

const filtraIdade = usuarios.filter(function (faixaIdade) {
  return faixaIdade.idade >= 18 && faixaIdade.idade <= 65
})

console.log(filtraIdade)

const temCNH = filtraIdade.every(function (elemento) {
  return elemento.habilitado === true
})

if (temCNH === false) console.log('todos precisam estar habilitados')
else console.log('todos passaram no teste')