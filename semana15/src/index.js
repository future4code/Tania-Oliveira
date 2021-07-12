// Exercício 1
// a) Para acessar algum parametro devemos usar a propriedade process.argv, e acessamos o indice dele sempre apartir da posição [2]


// b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, 
// imprima no console uma mensagem que siga a seguinte estrutura:
// const name = process.argv[2]
// const age = process.argv[3]
// console.log(`meu nome é ${name} e minha idade é ${age}`)


//c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.
// const username = process.argv[2]
// const age = Number (process.argv[3])
// console.log(`Olá ${name}! Você tem ${age} anos. Em sete anos você tera ${age+7}`)

// Exercício 2
// Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores numéricos.
//  O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos.

// const operation = process.argv[2]
// const number1 = Number(process.argv[3])
// const number2 = Number(process.argv[4])
// let result = 'resultado:'
// switch (operation) {
//   case 'add':
//     result += number1 + number2
//     break
//   case 'sub':
//     result += number1 - number2
//     break
//   case 'mult':
//     result += number1 * number2
//     break
//   case 'div':
//     result += (number1 / number2).toFixed(1)
//     break
//   default:
//     result += 'operacao invalida'
// }
// console.log(result)

// Exercicío 3
// Crie uma aplicação Node que receba uma string representando **uma tarefa.** 
// O programa deve adicionar a **nova tarefa** em uma variável que represente uma **lista de tarefas.** 
// A lista de tarefas pode estar criada antes da execução do código. Após adicionar o item à lista, exiba a lista atualizada.

// const tasks =[
//   'estudar',
//   'comer',
//   'beber água'
// ]
// const task = process.argv[2]
// tasks.push(task)
// console.log(`lista de tarefas:${tasks}`)

// Exercício 4
// 





// const countries = require("./countries")
// console.table(countries)