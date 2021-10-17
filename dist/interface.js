"use strict";
var tlou = {
    id: '1',
    title: 'The Last of US',
    description: 'The best game in the word',
    genre: 'Action',
    plataform: ['PSC3', 'PSC4'],
    getSimilars: function (title) {
        console.log("Similar games to " + title + ": Uncharted, A Plague Tale, Metro");
    }
};
if (tlou.getSimilars) {
    tlou.getSimilars('Game of throungs');
}
var leftbehind = {
    title: 'The Last of US - Left Behind',
    description: 'You play as Ellie before the original game',
    genre: 'Action',
    plataform: ['PSC4'],
    originalGame: tlou,
    newContent: ['3 hours story', 'new characters'],
};
var CreateGame = (function () {
    function CreateGame(t, d, g) {
        this.title = t;
        this.description = d;
        this.genre = g;
    }
    return CreateGame;
}());
