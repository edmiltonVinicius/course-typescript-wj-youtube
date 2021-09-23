/*
    Union: E quado passamos um parametro que pode ser de mais de um tipo,
        ex: logDetails(uid: number | string)   
            
        Estamos dizendo que ui pode ser do tipo number ou string 
*/

function logDetails(uid: number | string, item: string) {
    console.log(`A product with ${uid} has a title as ${item}`);
}
logDetails(123, 'sapato');
logDetails('texto', 'camisa');   


function logInfo(uid: number | string, item: string) {
    console.log(`An user with ${uid} has a name as ${item}`);
}
logInfo(123456, 'Vinicius');
logInfo('555', 'Paloma');

