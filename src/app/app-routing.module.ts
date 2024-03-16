import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuemSomosComponent } from './pages/quem-somos/quem-somos.component';
import { HomeComponent } from './pages/home/home.component';
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
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';
import { FechamentoItensComponent } from './pages/fechamento-itens/fechamento-itens.component';
import { FechamentoEnderecoComponent } from './pages/fechamento-endereco/fechamento-endereco.component';
import { FechamentoPagamentoComponent } from './pages/fechamento-pagamento/fechamento-pagamento.component';
import { FechamentoPedidoComponent } from './pages/fechamento-pedido/fechamento-pedido.component';
import { ClienteComponent } from './pages/cliente/cliente.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'quemSomos', component: QuemSomosComponent},
  {path: 'termos', component: TermosComponent},
  {path: 'trocas', component: TrocasComponent},
  {path: 'privacidade', component: PrivacidadeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'recuperarSenha', component: RecuperarSenhaComponent},
  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'cadastrarNovaSenha', component: CadastrarNovaSenhaComponent},
  {path: 'confirmacaoCadastrarNovaSenha', component: ConfirmacaoCadastroNovaSenhaComponent},
  {path: 'contato', component: ContatoComponent},
  {path: 'confirmacaoContato', component: ConfirmacaoContatoComponent},
  {path: 'carrinho', component: CarrinhoComponent},
  {path: 'fechamentoItens', component: FechamentoItensComponent},
  {path: 'fechamentoEndereco', component: FechamentoEnderecoComponent},
  {path: 'fechamentoPagamento', component: FechamentoPagamentoComponent},
  {path: 'fechamentoPedido', component: FechamentoPedidoComponent},
  {path: 'cliente', component: ClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
