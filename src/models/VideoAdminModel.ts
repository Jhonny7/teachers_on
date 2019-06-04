export class VideoAdminModel {
    constructor(
        public id: number,
        public descripcion: string,
        public url: string,
        public categoria_descripcion: string,
        public fecha:string,
        public idCategoria:number
    ) { }

}