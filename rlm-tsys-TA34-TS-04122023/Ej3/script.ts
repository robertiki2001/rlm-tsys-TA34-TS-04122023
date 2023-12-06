import { Electrodomestico } from "./class/ElectrodomesticoClass";
import { Lavadora } from "./class/LavadoraClass";
import { Television } from "./class/TelevisionClass";

export const Ej3 = (): void => {
        const electrodomesticos: Electrodomestico[] = [
            new Electrodomestico(),
            new Lavadora(),
            new Television(),
            new Lavadora(150, 'rojo', 'A', 20, 35),
            new Television(200, 'negro', 'B', 30, 50, true),
            new Electrodomestico(120, 'azul', 'C', 10),
            new Lavadora(180, 'gris', 'D', 25, 40),
            new Television(250, 'blanco', 'E', 45, 60),
            new Lavadora(130, 'negro', 'F', 15, 30),
            new Television(180, 'rojo', 'A', 55, 70, true)
        ];

        let precioTotalElectrodomesticos = 0;
        let precioTotalLavadoras = 0;
        let precioTotalTelevisiones = 0;

        for (const electrodomestico of electrodomesticos) {
            const precioFinal = electrodomestico.precioFinal();
            precioTotalElectrodomesticos += precioFinal;

            if (electrodomestico instanceof Lavadora) {
                precioTotalLavadoras += precioFinal;
            }

            if (electrodomestico instanceof Television) {
                precioTotalTelevisiones += precioFinal;
            }
        }

        console.log(`Precio total Electrodomesticos: ${precioTotalElectrodomesticos}`);
        console.log(`Precio total Lavadoras: ${precioTotalLavadoras}`);
        console.log(`Precio total Televisiones: ${precioTotalTelevisiones}`);
}

