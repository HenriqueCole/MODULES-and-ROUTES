import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {AdministrationModule} from './administration/administration.module';
import {ClientModule} from './client/client.module';
import {LojaModule} from './loja/loja.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AdministrationModule,
    ClientModule,
    LojaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
