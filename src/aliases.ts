
/*
Type Aliases: E quando criamos uma expressão que recebe possiveis valores de uma var ou function,
    ex: type Uid = string | number   
        
    Estamos criando um aliases com nome de Uid (sempre com nome maiusculo) que pode receber string ou number
*/
type Uid = number | string | undefined;

function logDetails2(uid: Uid, item: string) {
    console.log(`A product with ${uid} has a title as ${item}`);
}
logDetails2(123, 'brinco');
logDetails2('texto', 'calça'); 

// Aqui criamos um aliases que podera receber 3 valores
// Depois tentamos criar uma variavel com type aliases passando um valor diferente dos 3
type Plataform = 'Windows' | 'Linux' | 'Mac Os';

let p: Plataform;
// p = 'Android'  --> erro
let p2: Plataform = 'Windows';   // correto

function showPlataforms(plataform: Plataform) {
    return `User Plataform: ${plataform}`
}
showPlataforms('Windows');
// showPlataforms('Andriod');   --> erro