let qtdNumeros = contador = prompt('Digite a quantidade de números para o cálculo da média:'); //Declarando multiplas variáveis na mesma linha e atribuindo o valor do prompt a elas.
let soma = 0; //Declarando variável soma e atribuindo valor 0.

console.log(`A quantidade de números para o cálculo da média é: ${qtdNumeros}\nO valor do contador é: ${contador}\nA soma é: ${soma}`); //Criando um log das variáveis para entender o que rola.
console.log(`O contador é maior que zero: ${0 < contador}`); //Log da comparação do contador.

while(0 < contador) //Começando o loop até que o contador seja menor ou igual a zero.
{ 
    soma += parseFloat(prompt('Digite o numero:')); //Convertendo para float e somando o valor inserido no prompt.
    contador--; //Diminuindo o contador.
}

console.log(soma/qtdNumeros); //Fazendo o log da média.
alert(soma/qtdNumeros); //Exibindo a média.