//Exercícios de interpretação de código


//----------------------------EXERCÍCIO 1
// O teste consite de saber se a pessoa colaca um numero par ou impar
//Para passar a pessoa tem que colacar um número par.



//------------------------EXERCÍCIO 2
//a. O código serve para determinar o preço das frutas.
//b. A mensagem impressa será " O preço da fruta Maça é 2.25"
//c. A mensagem seria "O preço da fruta Pera é 5 "


//----------------------EXERCÍCIO 3
//a. A primeira linha está atribuindo ao numero a repsota do usuário a pergunta do prompt.
//b. Se o usuário digitasse o nº 10 a mensagem seria " Esse número passou no teste"
// Se o usuário digitasse o nº -10 a mensagem seria " Esse mensagem é secreta!!!"

//---------------------EXERCÍCIO 4

//1-
// let idade = Number (prompt('Qual a sua idede?'))

// if(idade >= 18){
//     console.log("Você pode dirigir!!!!")
// } else{
//     if(idade < 18){
//         console.log('Estaremos te esperando quando fizer 18 anos ;)')
//     }
// }

//--------------------EXERCÍCIO 5

// let turnoAluno = prompt('Você estuda em qual turno? M-manhã T-tarde N-noturno')
// if(turnoAluno.toLocaleLowerCase() === 'M'){
//     console.log('Bom dia!')
// } else {
//     if(turnoAluno.toLocaleLowerCase() === 'T'){
//     console.log('Boa tarde!')}
//     console.log('Boa Noite')
// }

//---------------------EXERCICÍO 6
// let turnoAluno = prompt('Você estuda em qual turno? M-manhã T-tarde N-noturno')
// switch (turnoAluno) {
//     case 'm':
//         console.log('Bom dia!')
//     break
//     case 't':
//             console.log('Boa tarde!')
//     break
//     case 'n':
//             console.log('Boa Noite!')
//     break
//     default:
//         console.log('Não entendi:(!')

              
//     }

// //------------------------EXERCÍCIO 7
// let generoFilme = prompt('Que genero de filme gostaria de assistir? 1- terror 2- fantasia 3- suspense')
// let valorIngresso = prompt('Qual o valor máximo que gostaria de pagar? 1- Até R$15 2- Até R$ 30 3- Até R$50')
// switch(generoFilme, valorIngresso){
//     case 2, 1:
//         console.log('Bora assistir um filme;)')
//         break
//     case 1, 1:
//         console.log('O valor está bom, mas o filme da medo:|')
//         break
//     case 3, 2:
//         console.log('Não gostei do valor nem do filme')
//         break
//     case 2, 3:
//         console.log('O filme tá perfeito, mas o valor tá caro!')
//         break
//     default:
//         console.log('Vamos deixar para outro dia né... melhor rsrsrs')
// }