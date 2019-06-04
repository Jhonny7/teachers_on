export class VideoModel {
    constructor(
        public id: number,
        public descripcion: string,
        public url: string,
        public categoria_descripcion: string,
        public temporal: any,
        public like: number,
        public no_like: number
    ) { }

}