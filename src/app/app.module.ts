import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { QuemSomosComponent } from './pages/quem-somos/quem-somos.component';
import { CarrosselComponent } from './components/carrossel/carrossel.component';
import { TermosComponent } from './pages/termos/termos.component';
import { TrocasComponent } from './pages/trocas/trocas.component';
import { PrivacidadeComponent } from './pages/privacidade/privacidade.component';
import { RecuperarSenhaComponent } from './pages/recuperar-senha/recuperar-senha.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastrarComponent } from './pages/cadastrar/cadastrar.component';
import { CadastrarNovaSenhaComponent } from './pages/cadastrar-nova-senha/cadastrar-nova-senha.component';
import { ConfirmacaoCadastroNovaSenhaComponent } from './pages/confirmacao-cadastro-nova-senha/confirmacao-cadastro-nova-senha.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { ConfirmacaoContatoComponent } from './pages/confirmacao-contato/confirmacao-contato.component';
import { FruitCardComponent } from './components/fruit-card/fruit-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    QuemSomosComponent,
    CarrosselComponent,
    TermosComponent,
    TrocasComponent,
    PrivacidadeComponent,
    RecuperarSenhaComponent,
    LoginComponent,
    CadastrarComponent,
    CadastrarNovaSenhaComponent,
    ConfirmacaoCadastroNovaSenhaComponent,
    ContatoComponent,
    ConfirmacaoContatoComponent,
    FruitCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
