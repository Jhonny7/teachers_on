import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'videos', loadChildren: './videos/videos.module#VideosPageModule' },
  { path: 'crud-categoria', loadChildren: './crud-categoria/crud-categoria.module#CrudCategoriaPageModule' },
  { path: 'videos-admin', loadChildren: './videos-admin/videos-admin.module#VideosAdminPageModule' },
  { path: 'crud-videos', loadChildren: './crud-videos/crud-videos.module#CrudVideosPageModule' },
  { path: 'patrocinadores', loadChildren: './patrocinadores/patrocinadores.module#PatrocinadoresPageModule' },
  { path: 'crud-patrocinadores', loadChildren: './crud-patrocinadores/crud-patrocinadores.module#CrudPatrocinadoresPageModule' },
  { path: 'usuarios', loadChildren: './usuarios/usuarios.module#UsuariosPageModule' },
  { path: 'crud-usuarios', loadChildren: './crud-usuarios/crud-usuarios.module#CrudUsuariosPageModule' },
  { path: 'cambio-contrasenia', loadChildren: './cambio-contrasenia/cambio-contrasenia.module#CambioContraseniaPageModule' },
  { path: 'acercade', loadChildren: './acercade/acercade.module#AcercadePageModule' },
  { path: 'contacto', loadChildren: './contacto/contacto.module#ContactoPageModule' },
  { path: 'video-info', loadChildren: './video-info/video-info.module#VideoInfoPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
