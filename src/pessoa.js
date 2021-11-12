class Pessoa {
    constructor(nickName) {
        this.nickName = nickName;
    }

    get nickname() {
        return this.nickName;
    }
}

export { Pessoa };