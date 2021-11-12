import { Pessoa } from './pessoa.js';
class Jogador extends Pessoa {
    constructor(nickName, membros) {
        super(nickName);
        this.vidas = membros;
    }

    perdeVida() {
        this.vidas -= 1;
    }
}

export { Jogador };