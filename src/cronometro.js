export class Cronometro {
    constructor() {
        this.control;
        this.horas = 0
        this.minutos = 0
        this.segundos = 0
        this.centesimos = 0
    }

    start() {
        this.control = setInterval(this.ticks.bind(this), 10);
    }

    stop() {
        this.correctTime()
        clearInterval(this.control);
    }

    reiniciar() {
        this.horas = 0
        this.minutos = 0
        this.segundos = 0
        this.centesimos = 0
    }

    ticks() {
        if (this.centesimos < 99) this.centesimos++
        if (this.centesimos == 99) this.centesimos = -1;
        if (this.centesimos == 0) this.segundos++;
        if (this.segundos == 59) this.segundos = -1;
        if ( (this.centesimos == 0 ) && (this.segundos == 0) ) this.minutos++;
        if (this.minutos == 59) this.minutos = -1;
        if ( (this.centesimos == 0) && (this.segundos == 0) && (this.minutos == 0)) this.horas++;
        this.printAndReturnCronometer()
    }

    printAndReturnCronometer() {
        this.correctTime()
        const hh = this.horas < 10 ? `0${this.horas.toString()}` : this.horas.toString();
        const mm = this.minutos < 10 ? `0${this.minutos.toString()}` : this.minutos.toString();
        const ss = this.segundos < 10 ? `0${this.segundos.toString()}` : this.segundos.toString();
        const cs = this.centesimos < 10 ? `0${this.centesimos.toString()}` : this.centesimos.toString();
        return `${hh}:${mm}:${ss}.${cs}`
    }

    lessTimeComparedTo(other_cronometer) {
        return this.convertToSeconds() < other_cronometer.convertToSeconds()
    }

    convertToSeconds() {
        const horasParaSegundos = this.horas * 60 * 60
        const minutosParaSegundos = this.minutos * 60
        const segundosParaSegundos = this.segundos
        const centesimosParaSegundos = Math.round(this.centesimos / 100)
        return horasParaSegundos + minutosParaSegundos + segundosParaSegundos + centesimosParaSegundos
    }

    correctTime() {
        this.centesimos == -1 ? 0 : this.centesimos;
        this.segundos == -1 ? 0 : this.segundos;
        this.minutos == -1 ? 0 : this.minutos;
        this.horas == -1 ? 0 : this.horas;
    }

}