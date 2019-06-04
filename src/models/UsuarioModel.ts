export class UsuarioModel {
    constructor(
        public id: number,
        public idRol: number,
        public nombre: string,
        public apellidoPaterno: string,
        public apellidoMaterno: string,
        public email: string,
        public fecha: string,
        public img: string,
        public idStatus: number
    ) { }

}