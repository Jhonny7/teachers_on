export class ComentarioModel {
    constructor(
        public id: number,
        public comentario: string,
        public fecha: string,
        public img_base64: string,
        public nombre: string,
        public like: number,
        public no_like: number
    ) { }

}