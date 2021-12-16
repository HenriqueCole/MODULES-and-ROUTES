import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosComponent } from './produtos/produtos.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProdutoComponent } from './produto/produto.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  {
    path: 'produto', children: [
      { path: '', component: ProdutosComponent },
      { path: ':id', component: ProdutoComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  declarations: [ProdutosComponent, MainPageComponent, ProdutoComponent],
  exports: [ProdutosComponent]
})
export class LojaModule { }
