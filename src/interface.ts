// O I não é obrigatório
interface IGame {
    id?: string | number;
    title: string;
    description: string;
    // modificador de acesso, ou seja genre é apenas para leitura, assim como em classes.
    readonly genre: string;
    // O ? diz que o atributo/metodo é opcional, ou seja pode ou não ser declarado.
    plataform?: string[];
    // Aqui é assinatura de um método que recebe um parametro e retorna void ou seja nada.
    getSimilars?: (title: string) => void;
}

const tlou: IGame = {
    id: '1',
    title: 'The Last of US',
    description: 'The best game in the word',
    genre: 'Action',
    plataform: ['PSC3', 'PSC4'],
    getSimilars: (title: string) => {
        console.log(`Similar games to ${title}: Uncharted, A Plague Tale, Metro`);
    }
}

// Como o método getSimilars tem o ?, ou seja não é obrigatório, não podemos chama-los direto -> tlou.getSimilars()
// pois o TS não deixa, ai precisamos fazer esse if, para depois chamar.
if(tlou.getSimilars) {
    tlou.getSimilars('Game of throungs');
}

// tlou.genre = 'Terror' --> erro, pois genre e readonly


// para extender usar interafce usamos o 'extends', assim a nova interface terá acesso a todos oque houver.
interface IDlc extends IGame {
    originalGame: IGame;
    newContent: string[];
}

const leftbehind: IDlc = {
    title: 'The Last of US - Left Behind',
    description: 'You play as Ellie before the original game',
    genre: 'Action',
    plataform: ['PSC4'],
    originalGame: tlou,
    newContent: ['3 hours story', 'new characters'],
}


// Aqui usamos o interface na classe, com a palavra reservada Implements, o mesmo conceito a classe erda tudo da interface implementada.
class CreateGame implements IGame {
    title: string;
    description: string;
    genre: string;

    constructor(t: string, d: string, g: string) {
        this.title = t;
        this.description = d;
        this.genre = g;
    }
}