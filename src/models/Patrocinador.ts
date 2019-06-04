export class PatrocinadorModel {
    constructor(
        public id: number,
        public descripcion: string,
        public img_url: string,
        public img_base64: string,
        public url:string,
        public informacion:string,
        public idStatus: number
    ) { }

}