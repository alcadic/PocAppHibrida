import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { V1PrincipalPage } from './v1-principal.page';

import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '',
    component: V1PrincipalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TranslateModule
  ],
  declarations: [V1PrincipalPage]
})
export class V1PrincipalPageModule {}
