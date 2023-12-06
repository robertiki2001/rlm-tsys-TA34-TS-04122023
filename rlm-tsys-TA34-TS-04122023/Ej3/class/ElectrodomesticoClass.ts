export class Electrodomestico {
    public static readonly COLOR_BLANCO: string = 'blanco';
    public static readonly COLOR_NEGRO: string = 'negro';
    public static readonly COLOR_ROJO: string = 'rojo';
    public static readonly COLOR_AZUL: string = 'azul';
    public static readonly COLOR_GRIS: string = 'gris';

    public static readonly CONSUMO_ENERGETICO_F: string = 'F';

    protected precioBase: number;
    protected color: string;
    protected consumoEnergetico: string;
    protected peso: number;

    constructor(
        precioBase: number = 100,
        color: string = Electrodomestico.COLOR_BLANCO,
        consumoEnergetico: string = Electrodomestico.CONSUMO_ENERGETICO_F,
        peso: number = 5
    ) {
        this.precioBase = precioBase;
        this.color = this.validarColor(color);
        this.consumoEnergetico = this.validarConsumoEnergetico(consumoEnergetico);
        this.peso = peso;
    }

    private validarColor(color: string): string {
        const coloresDisponibles = [
            Electrodomestico.COLOR_BLANCO,
            Electrodomestico.COLOR_NEGRO,
            Electrodomestico.COLOR_ROJO,
            Electrodomestico.COLOR_AZUL,
            Electrodomestico.COLOR_GRIS
        ];

        const colorValidado = color.toLowerCase();
        return coloresDisponibles.includes(colorValidado) ? colorValidado : Electrodomestico.COLOR_BLANCO;
    }

    private validarConsumoEnergetico(consumo: string): string {
        const consumosDisponibles = ['A', 'B', 'C', 'D', 'E', 'F'];
        const consumoValidado = consumo.toUpperCase();
        return consumosDisponibles.includes(consumoValidado) ? consumoValidado : Electrodomestico.CONSUMO_ENERGETICO_F;
    }

    public getPrecioBase(): number {
        return this.precioBase;
    }

    public getColor(): string {
        return this.color;
    }

    public getConsumoEnergetico(): string {
        return this.consumoEnergetico;
    }

    public getPeso(): number {
        return this.peso;
    }

    public comprobarConsumoEnergetico(letra: string): void {
        this.consumoEnergetico = this.validarConsumoEnergetico(letra);
    }

    public comprobarColor(color: string): void {
        this.color = this.validarColor(color);
    }

    public precioFinal(): number {
        let precioFinal = this.precioBase;

        switch (this.consumoEnergetico) {
            case 'A':
                precioFinal += 100;
                break;
            case 'B':
                precioFinal += 80;
                break;
            case 'C':
                precioFinal += 60;
                break;
            case 'D':
                precioFinal += 50;
                break;
            case 'E':
                precioFinal += 30;
                break;
            case 'F':
                precioFinal += 10;
                break;
        }

        if (this.peso >= 0 && this.peso < 20) {
            precioFinal += 10;
        } else if (this.peso >= 20 && this.peso < 50) {
            precioFinal += 50;
        } else if (this.peso >= 50 && this.peso <= 100) {
            precioFinal += 80;
        } else if (this.peso > 100) {
            precioFinal += 100;
        }

        return precioFinal;
    }
}