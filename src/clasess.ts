type UserId = string | number;

// Abstract significa que uma classe não pode ser instanciada, mas pode ser extendida, isso é bom para 
// criar uma classe modelo, assim depois basta extendela, e ela nao poderá ser instanciada.
abstract class UserAccount {

    // atributo/metodo com protected podem ser acessado/alterados na classe e nas classes que estenderem essa classe
    protected id: UserId;
    name: string;
    age: number;

    constructor(id: UserId, name: string, age: number){
        this.name = name;
        this.age = age;
        this.id = id;
    }

    logDetails(): void {
        console.log(`The player ${this.name} is ${this.age} years old.`);
    }
}

// A classe CharAccount extende todos os recursos disponiveis de UserAccount
class CharAccount extends UserAccount {
    // o public é implicito/default ou seja se nao passar nada e publci por padrao, pode ser acessar e alterado fora da classe
    public genre: string;

    // com a palavra private o atributo/metodo é disponivel apenas na classe, podenddo alterar, usar em metodos....
    // classes que estenderem essa classe nao terao acesso, para isso deve user protected
    private nickname: string;

    // como o nome diz, readonly (apenas ler), faz com oque a propriedade/metodo possa ser lido/acessado fora da classe, porem não alterado
    readonly level: number;

    // No constructor eu passo tanto as propriedade dessa classe como as da classe que eu estou extendendo (UserAccount)
    constructor(id: UserId, name: string, age: number, nickname: string, level: number, genre: string){
        
        // Eu chamo o metodo super para obter/instanciar os recursos da classe superior/extendida
        super(id, name, age);

        this.nickname = nickname;
        this.level = level;
        this.genre = genre;
    }

    // get para obter dados da classe, para invocar não chamar como função e sim como propriedade normal
    get getLevel() {
        return this.level;
    }

    set setGenre(genre: string) {
        this.genre = genre;
    }

    get getGenre() {
        return console.log(this.genre);
    }

    logCharDetails(): void {
        console.log(`The player ${this.name}:${this.id} has the char ${this.nickname} at level ${this.level}!`);
    }
}


// const ed = new UserAccount('1234', 'Edmilton', 26);  -> erro, pois a classe UserAccount é abstract, ou sejá não pode ser instanciada e sim extendida

// vini.nickname = 'ViniciusPansanato'  -> erro, pois a propriedade nickname é private ou seja não é acessivel fora da classe
const vini = new CharAccount('123456', 'Vini', 26, 'vini@cs', 80, 'masculino');
// vini.level = 90; -> erro, pois a propriedade level é readonly, ou seja pode ser lida mas não modificada
console.log(vini.level);

//console.log(vini.id) -> erro, pois é protected, pode ser acessar na classe mãe/criadora e nas extendidas/filhas, porém fora não!

vini.logCharDetails();
// o metodo get nao deve ser invocado como função e sim como atributo sem os ()
console.log(vini.getLevel)

// o set é igual ao get nao deve ser invocado como função e sim como atributo/variavel
vini.setGenre = 'MASCULINO'
vini.getGenre;