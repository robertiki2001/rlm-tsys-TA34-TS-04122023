import { Electrodomestico } from "./ElectrodomesticoClass";

export class Television extends Electrodomestico {
    private static readonly RESOLUCION_POR_DEFECTO: number = 20;
    private static readonly ES_4K_POR_DEFECTO: boolean = false;

    private resolucion: number;
    private es4k: boolean;

    constructor(
        precioBase: number = 100,
        color: string = Electrodomestico.COLOR_BLANCO,
        consumoEnergetico: string = Electrodomestico.CONSUMO_ENERGETICO_F,
        peso: number = 5,
        resolucion: number = Television.RESOLUCION_POR_DEFECTO,
        es4k: boolean = Television.ES_4K_POR_DEFECTO
    ) {
        super(precioBase, color, consumoEnergetico, peso);
        this.resolucion = resolucion;
        this.es4k = es4k;
    }

    public getResolucion(): number {
        return this.resolucion;
    }

    public tiene4k(): boolean {
        return this.es4k;
    }

    public precioFinal(): number {
        const precioBaseElectrodomestico = super.precioFinal();
        let precioFinalTelevision = precioBaseElectrodomestico;

        if (this.resolucion > 40) {
            precioFinalTelevision += precioBaseElectrodomestico * 0.3;
        }

        if (this.es4k) {
            precioFinalTelevision += 50;
        }

        return precioFinalTelevision;
    }
}