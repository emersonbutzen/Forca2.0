import { Jogador } from './jogador.js';
class Jogo {
    #palavras = [];
    #palavraSecreta;
    static vidas = 6;

    constructor() {
        this.jogador;
        this.highScore;
        this.tentativas;
    }

    iniciarJogo(nickName) {
        this.jogador = new Jogador(nickName, vidas);
        this.setPalavras();
        this.#palavraSecreta = this.getPalavraRandomica();
    }

    reiniciarJogo(nickName, tentativas, palavraSecreta, highScore) {
        this.jogador = new Jogador(nickName, vidas);
        this.tentativas = tentativas;
        this.palavraSecreta = palavraSecreta;
        this.highScore = highScore;
    }

    setPalavras = function(){

        const url = 'https://api.dicionario-aberto.net';

        const palavras = fetch(`${url}/random`, { method: 'get' })
            .then(response => response.json())
            .then(data => {
                const palavraRandomica = data.word;            
                return fetch(`${url}/near/${palavraRandomica}`);
            })
            .then(palavrasResponse => palavrasResponse.json())
            .catch(err => {
                console.error('Request failed', err)
            })

            palavras.then(palavras => {
                this.#palavras = palavras; 
            });
    }

    getPalavraRandomica() {
        return array[Math.floor(Math.random() * this.#palavras.length)];
    }
}    arrayPalavraSecreta = () => {
        return  this.#palavraSecreta.split("");
    }
}

export { Jogo };