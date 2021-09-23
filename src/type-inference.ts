// Type Inference - È quando eu crio uma variavel com um valor, assim ele já terá um valor
// Assim eu não preciso fazer isso: let message: string -- messade = '.....'
let message = 'variavel com tipo já definido';


// Aqui o TYPESCRIPT já entende algumas funções/parametros
// por exemplo o parametro 'e' o TS já sabe que ele é um parametro do tipo 'MouseEvent'
window.addEventListener('click', (e) => {
    console.log(e.target)
})