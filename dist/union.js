"use strict";
function logDetails(uid, item) {
    console.log("A product with " + uid + " has a title as " + item);
}
logDetails(123, 'sapato');
logDetails('texto', 'camisa');
function logInfo(uid, item) {
    console.log("An user with " + uid + " has a name as " + item);
}
logInfo(123456, 'Vinicius');
logInfo('555', 'Paloma');
