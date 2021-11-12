# Forca2.0

Atividade 04
Data de Entrega: Segunda-feira, dia 08/11/2021

PRINCIPAL (700XP)
- Implementar o jogo da forca 2.0;
- Devem ser utilizadas:
    - pelo menos duas classes: OK;
    - contemplando conceitos como encapsulamento: OK;
    - variáveis estáticas: Ok;
    - atributos: OK;
    - métodos: Ok;
    - pelo menos uma função de getElementBy: OK;
    - ou querySelector para buscar algum elemento no DOM: OK;
    - LocalStorage e/ou SessionStorage para armazenar highscore (podem considerar o que quiserem como highscore, mas pensei aqui no tempo que o jogador levou pra acertar; quanto menor, melhor): OK;
    - Utilizar o event listener para reconhecer SOMENTE LETRAS do alfabeto: OK;
    - Ter um input com espaço para o usuário chutar a palavra de uma vez só: OK;
- A palavra deve ir sendo completada no DOM caso o usuário acerte;
- O boneco na forca deve ir sendo desenhado a cada novo erro do usuário;
- Caso o usuário perca, deve aparecer a mensagem GAME OVER (ou algo parecido), e caso vença, deve aparecer YOU WIN (ou algo semelhante);
- Permitir ao usuário jogar novamente uma nova partida.

EXTRA (300XP)
- Acessar o conjunto de palavras a partir de um JSON e de forma ASSÍNCRONA;
- LocalStorage deve ser usado para salvar o estado atual do jogo (se o jogador parar no meio e quiser voltar depois);
- Ter um teclado virtual com as letras e funcionando de acordo.

Peço desculpas pela demora pessoal.
Divirtam-se, e qualquer dúvida só perguntarem lá na central-de-dúvidas .
Valeeeeu e até quarta! 🤙🏻

Classes
[Jogo, Jogador, Tabuleiro]
Jogo [Salvar, Recuperar, Iniciar, Reiniciar][highscore]
Tabuleiro [ECorreto, Letra, -> ChutaPalavra] <Utilizar o event listener para reconhecer SOMENTE LETRAS do alfabeto>

Local storage armazena o [Jogo]

Hannah

H -> 1
S -> 2 -> 1
F -> 3 -> 2
S -> 4 -> 3
S -> 5 -> 4
S -> 6 -> 5
REINICIAR
N -> 7
I -> 8 -> 1
