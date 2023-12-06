export class Password {
    private longitud: number;
    private contraseña: string;

    constructor(longitud: number = 8) {
        this.longitud = longitud;
        this.contraseña = this.generarContraseñaAleatoria();
    }

    private generarContraseñaAleatoria(): string {
        const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let contraseñaGenerada = '';

        for (let i = 0; i < this.longitud; i++) {
            const caracterAleatorio = caracteres.charAt(Math.floor(Math.random() * caracteres.length));
            contraseñaGenerada += caracterAleatorio;
        }

        return contraseñaGenerada;
    }

    public obtenerContraseña(): string {
        return this.contraseña;
    }
}