import { Pessoa } from './pessoa.js';
class Jogador extends Pessoa {
    constructor(nickName, vidas) {
        super(nickName);
        this.vidas = vidas;
    }

    perdeVida() {
        this.vidas -= 1;
    }
}

export { Jogador };