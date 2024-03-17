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
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';
import { FruitCardCarrinhoComponent } from './components/fruit-card-carrinho/fruit-card-carrinho.component';
import { FechamentoItensComponent } from './pages/fechamento-itens/fechamento-itens.component';
import { FruitCardFechamentoItensComponent } from './components/fruit-card-fechamento-itens/fruit-card-fechamento-itens.component';
import { FechamentoEnderecoComponent } from './pages/fechamento-endereco/fechamento-endereco.component';
import { EnderecoCardComponent } from './components/endereco-card/endereco-card.component';
import { FechamentoPagamentoComponent } from './pages/fechamento-pagamento/fechamento-pagamento.component';
import { FechamentoPedidoComponent } from './pages/fechamento-pedido/fechamento-pedido.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { ClienteDadosComponent } from './pages/cliente-dados/cliente-dados.component';
import { ClienteMenuCardComponent } from './components/cliente-menu-card/cliente-menu-card.component';
import { ClienteContatosComponent } from './pages/cliente-contatos/cliente-contatos.component';
import { ClienteEnderecoComponent } from './pages/cliente-endereco/cliente-endereco.component';
import { ClientePedidosComponent } from './pages/cliente-pedidos/cliente-pedidos.component';
import { ClienteFavoritosComponent } from './pages/cliente-favoritos/cliente-favoritos.component';
import { ClienteAlterarSenhaComponent } from './pages/cliente-alterar-senha/cliente-alterar-senha.component';
import { PedidoAccordionComponent } from './components/pedido-accordion/pedido-accordion.component';
import { ProdutoComponent } from './pages/produto/produto.component';

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
    FruitCardComponent,
    CarrinhoComponent,
    FruitCardCarrinhoComponent,
    FechamentoItensComponent,
    FruitCardFechamentoItensComponent,
    FechamentoEnderecoComponent,
    EnderecoCardComponent,
    FechamentoPagamentoComponent,
    FechamentoPedidoComponent,
    ClienteComponent,
    ClienteDadosComponent,
    ClienteMenuCardComponent,
    ClienteContatosComponent,
    ClienteEnderecoComponent,
    ClientePedidosComponent,
    ClienteFavoritosComponent,
    ClienteAlterarSenhaComponent,
    PedidoAccordionComponent,
    ProdutoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
