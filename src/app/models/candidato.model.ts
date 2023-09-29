export class Candidato{
    constructor(
        public nombre: string,
        public apellidos: string,
        public fechaNacimiento: Date,
        public puesto: string,
        public localidad: string,
        public sueldo: number,
        public imagen: string,
        public idCandidato?: number,
    ) { }
}