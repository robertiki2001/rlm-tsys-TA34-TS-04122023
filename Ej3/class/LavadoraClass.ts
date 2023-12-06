import { Electrodomestico } from "./ElectrodomesticoClass";

export class Lavadora extends Electrodomestico {
    private static readonly CARGA_POR_DEFECTO: number = 5;

    private carga: number;

    constructor(
        precioBase: number = 100,
        color: string = Electrodomestico.COLOR_BLANCO,
        consumoEnergetico: string = Electrodomestico.CONSUMO_ENERGETICO_F,
        peso: number = 5,
        carga: number = Lavadora.CARGA_POR_DEFECTO
    ) {
        super(precioBase, color, consumoEnergetico, peso);
        this.carga = carga;
    }

    public getCarga(): number {
        return this.carga;
    }

    public precioFinal(): number {
        const precioBaseElectrodomestico = super.precioFinal();
        return this.carga > 30 ? precioBaseElectrodomestico + 50 : precioBaseElectrodomestico;
    }
}