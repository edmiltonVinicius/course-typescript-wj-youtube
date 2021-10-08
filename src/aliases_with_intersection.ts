// AccountInfo -> Informations user
type AccountInfo = {
    id: number | string;
    name: string;
    email?: string;  // -> com o ? o atributo vira opcional
};
const account: AccountInfo = {
    id: 123,
    name: 'Edmilton',
    email: 'edmilton@gmail.com'  // se eu tirar o e-mail não dá ero pois ele é opction (email?)
};

// CharInfo -> Infomations user in game
type CharInfo = {
    nickname: string;
    level: number;
};
const char: CharInfo = {
    nickname: 'ed@gamer',
    level: 100
};

// PlayerInfo -> Informações do AccountInfo + CharInfo
type PlayerInfo = AccountInfo & CharInfo;
const player: PlayerInfo = {
    id: 1234,
    name: 'Jogador',
    level: 50,
    nickname: 'jog@gamer',
    email: 'jogador@email'
};
