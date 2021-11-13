import { Jogador } from './jogador.js';
class Jogo {
    #palavraSecreta;
    static membros = 7;

    constructor() {
        this.jogador;
        this.highScore;
        this.tentativas;
        this.palavras = [];
        this.correct = [];
        this.incorrect = new Set();
    }

    iniciarJogo(nickName) {
        this.jogador = new Jogador(nickName, Jogo.membros);        
        return this.setPalavras().then((palavras) => {
            this.palavras.push(...palavras);
            this.#palavraSecreta = this.getPalavraRandomica();
            console.log(this.#palavraSecreta);            
        });
    }

    reiniciarJogo(nickName, tentativas, palavraSecreta, highScore) {
        this.jogador = new Jogador(nickName, Jogo.membros);
        this.tentativas = tentativas;
        this.palavraSecreta = palavraSecreta;
        this.highScore = highScore;
    }

    setPalavras = function(){

        const url = 'https://api.dicionario-aberto.net';

        const palavras = fetch(`${url}/random`, { method: 'get' })
            .then(response => response.json())
            .then(data => {
                const qualquerPalavra = data.word;            
                return fetch(`${url}/near/${qualquerPalavra}`);
            })
            .then(palavrasResponse => palavrasResponse.json())
            .then(data => {
                return data;
            })
            .catch(err => {
                console.error('Request failed', err)
            });
        return palavras;    
    }

    getPalavraRandomica() {
        return this.palavras[Math.floor(Math.random() * this.palavras.length)];
    }

    arrayPalavraSecreta = () => {
        return this.#palavraSecreta.split("");
    }

    addCorrect(value) {
        this.correct.push(value);
    }

    addIncorrect(value) {
        this.correct.add(value);
    }
}

export { Jogo };