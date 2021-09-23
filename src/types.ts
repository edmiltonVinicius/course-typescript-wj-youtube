// Boolean
let bool: boolean;
bool = false;
bool = true;
// boll = 'true';  --> error

// String (' ', " ", ` `)
let text: string;
text = 'Olá mundo!';
text = 'text updated';
// text = true;    --> error

// Number
let num: number;
num = 10;
num = 2.5;
// num = 'oi'  --> error

// Array
let items: string[];
items = ['item1', 'item2'];
// items = 1234    --> error

let array2: Array<number>;
array2 = [1,2,3];
// array2 = 'alguma coisa'   --> error

// tuple = Um array que eu sei oque tera e os tipos
let title: [number, string];
title = [1, 'oi'];

// enum
enum Colors {
    white = '#fff',
    black = '#000'
}

// any (siginifica qualquer coisa, ou seja uma variavel pode ser de qualquer tipo)
let qualquerCoisa: any;
qualquerCoisa = 'Eu sou string';
qualquerCoisa = 1234;
qualquerCoisa = [1, 'sss', true];

// voi (vazio) - função que retorna nada
function logger(): void {
    console.log('função apenas com um console que não retorna nada')
}

// never (função que não tem retorno apenas ezecuta alguma ação)
function showError(): never {
    throw new Error('error');
}

// object (aceita, retorna um objeto)
let obj: object;
obj = {
    key: 'valor'
};
// obj = 'name'    --> error
