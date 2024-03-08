import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuemSomosComponent } from './pages/quem-somos/quem-somos.component';
import { HomeComponent } from './pages/home/home.component';
import { TermosComponent } from './pages/termos/termos.component';
import { TrocasComponent } from './pages/trocas/trocas.component';
import { PrivacidadeComponent } from './pages/privacidade/privacidade.component';
import { RecuperarSenhaComponent } from './pages/recuperar-senha/recuperar-senha.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'quemSomos', component: QuemSomosComponent},
  {path: 'termos', component: TermosComponent},
  {path: 'trocas', component: TrocasComponent},
  {path: 'privacidade', component: PrivacidadeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'recuperarSenha', component: RecuperarSenhaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
