import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LojaModule } from '../loja/loja.module';

import { RouterModule, Routes } from '@angular/router';
import { GerenciarProdutosComponent } from './gerenciar-produtos/gerenciar-produtos.component';
import { GerenciarClientesComponent } from './gerenciar-clientes/gerenciar-clientes.component';

const routes: Routes = [
  { path: 'gerenciar-produtos', component: GerenciarProdutosComponent},
  { path: 'gerenciar-clientes', component: GerenciarClientesComponent},
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    LojaModule
  ],
  declarations: [GerenciarProdutosComponent, GerenciarClientesComponent],
  exports: [GerenciarProdutosComponent, GerenciarClientesComponent]
})
export class AdministrationModule { }

