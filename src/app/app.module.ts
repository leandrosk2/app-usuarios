import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfigService } from './services/config.service'
import { UsuarioService } from './services/usuario.service';
import { IndexComponent } from './index/index.component';
import { ConsultaComponent } from './usuario/consulta/consulta.component';
import { MenuComponent } from './menu/menu.component';
import { CadastroComponent } from './usuario/cadastro/cadastro.component';
import { routing } from '../app.routes';



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ConsultaComponent,
    MenuComponent,
    CadastroComponent
    


  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing,
    NgbModule.forRoot(),
    FormsModule
    
  ],
  providers: [ConfigService, UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }