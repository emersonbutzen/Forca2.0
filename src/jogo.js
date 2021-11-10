class Jogo {
    static vidas = 6;

    constructor() {
        this.jogador;
        this.palavras;
        this.palavraSecreta;
        this.highScore;
        this.tentativas;
    }

    iniciarJogo(nickName) {
        this.jogador = new Jogador(nickName, vidas);
        fetch('https://api.dicionario-aberto.net/random')
            .then(response => response.json())
            .then(data => this.palavraSecreta = data.word);
    }

    reiniciarJogo(nickName, tentativas, palavraSecreta, highScore) {
        this.jogador = new Jogador(nickName, vidas);
        this.tentativas = tentativas;
        this.palavraSecreta = palavraSecreta;
        this.highScore = highScore;
    }
}