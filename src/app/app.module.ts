import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdministrationModule } from './administration/administration.module';
import { ClientModule } from './client/client.module';
import { LojaModule } from './loja/loja.module';
import CheckLogged from './checkLogged.canActivate';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: MainComponent,
        canActivate: []
      }
    ]),
    BrowserModule,
    AdministrationModule,
    ClientModule,
    LojaModule,
    FormsModule,
  ],
  providers: [CheckLogged],
  bootstrap: [AppComponent]
})
export class AppModule { }
