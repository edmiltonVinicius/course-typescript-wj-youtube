"use strict";
var bool;
bool = false;
bool = true;
var text;
text = 'Olá mundo!';
text = 'text updated';
var num;
num = 10;
num = 2.5;
var items;
items = ['item1', 'item2'];
var array2;
array2 = [1, 2, 3];
var title;
title = [1, 'oi'];
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
var qualquerCoisa;
qualquerCoisa = 'Eu sou string';
qualquerCoisa = 1234;
qualquerCoisa = [1, 'sss', true];
function logger() {
    console.log('função apenas com um console que não retorna nada');
}
function showError() {
    throw new Error('error');
}
var obj;
obj = {
    key: 'valor'
};
