import { Injectable } from '@angular/core';
import { MenuModel } from 'src/models/MenuModel';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  pages: MenuModel[] = [];
  
  constructor() { }

  public returnMenuByType(userType: number) {
    this.pages = [];
    if(userType == 1){ //administrador
      this.pages.push(new MenuModel("Categorías","categoria/categoria.png","#fff","/home"));
      this.pages.push(new MenuModel("Cursos","videos/videos.png","#fff","/videos-admin"));
      this.pages.push(new MenuModel("Patrocinadores","patrocinadores/patrocinadores.png","#fff","/patrocinadores"));
      this.pages.push(new MenuModel("Usuarios","usuarios/usuarios.png","#fff","/usuarios"));
      this.pages.push(new MenuModel("Acerca de","acercade/acercade.png","#fff","/acercade"));
      this.pages.push(new MenuModel("Contacto","contacto/contacto.png","#fff","/contacto"));
    }else{//usuario común
      this.pages.push(new MenuModel("Categorías","categoria/categoria.png","#fff","/home"))
      this.pages.push(new MenuModel("Patrocinadores","patrocinadores/patrocinadores.png","#fff","/patrocinadores"));
      this.pages.push(new MenuModel("Acerca de","acercade/acercade.png","#fff","/acercade"));
      this.pages.push(new MenuModel("Contacto","contacto/contacto.png","#fff","/contacto"));
    }
    return this.pages;
  }
}
