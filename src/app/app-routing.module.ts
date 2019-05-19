import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'v1-principal', pathMatch: 'full' },
  { path: 'v1-principal', loadChildren: './pages/v1-principal/v1-principal.module#V1PrincipalPageModule' },
  { path: 'v2-add-registro', loadChildren: './pages/v2-add-registro/v2-add-registro.module#V2AddRegistroPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
