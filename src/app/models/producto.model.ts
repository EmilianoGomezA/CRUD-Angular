export class Producto{
    constructor(
    public nombre: string,
    public marca: string,
    public clasificacion: string,
    public cantidad: number,
    public imagen: string,
    public id?: number,
    ) { }
}