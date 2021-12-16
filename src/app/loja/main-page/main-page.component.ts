import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GerenciarProdutosComponent } from 'src/app/administration/gerenciar-produtos/gerenciar-produtos.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

  abrirListaProdutos(produtos){
    this.router.navigate(['/produto/'])
  }

  abrirGerenciarProdutos(gerenciarProdutos){
    this.router.navigate(['/gerenciar-produtos/'])
  }
}
