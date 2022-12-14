"use strict";
// Como já vimos antes, O typescript infere bastante. Nesse caso ele infere que o retorno dessa função é do tipo number
function adicionar(n1, n2) {
    return n1 + n2;
}
let resultado;
// Por ter inferido que o retorno é um number, a função pode ser usada para atribuir valor para resultado, que é do mesmo tipo.
resultado = adicionar(1, 4);
/**
 * Aqui temos uma função que retorna uma string por causa do uso de toString(). Ela é praticamente igual a função acima, com apenas uma pequena alteração diferindo as duas
 * Como o dia a dia dos desenvolvedores é corrido, pequenas mudanças como essa podem ocorrer o tempo todo alterando uma função
 * Essa estrutura parece frágil e suscetível a erros e não é isso que queremos com typescript
*/
function adicionarNumeros(n1, n2) {
    return n1.toString() + n2;
}
/**
 * resultado = adicionarNumeros(1, 4);
 * No caso acima um erro vai ser apresentado porque, por inferência, o retorno de adicionarNumeros é do tipo string e resultado espera um number
 * Então temos um problema aqui, porque funções podem ser alteradas e isso pode implicar em erros em outras partes do código.
 */
// Uma solução para isso é explicitamente tipar o retorno de uma função. Se algo for modificado dentro dela, o próprio TS pode reclamar caso o retorno não seja number
function adicionarExplicitamenteNumber(n1, n2) {
    return n1 + n2;
}
resultado = adicionarExplicitamenteNumber(1, 4);
// Funções também podem não retornar nada, que é o caso do tipo void
function printarValor(num) {
    console.log('O valor é ' + num);
}
printarValor(3);
function multiplicarValorPor2(numero) {
    return numero * 2;
}
/**
 * Funções também podem ser passadas como parâmetro. O tipo delas é estruturado assim:
 * (parâmetro: tipo do parâmetro) => tipo do retorno
*/
function adicionarETratar(n1, n2, callback) {
    resultado = n1 + n2;
    callback(resultado); // Aqui ela é chamada 
}
adicionarETratar(1, 5, printarValor);
console.log(adicionarETratar(1, 5, multiplicarValorPor2));
//# sourceMappingURL=functions.js.map