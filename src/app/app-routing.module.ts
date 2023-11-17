import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './view/inicio/inicio.component';
import { CurriculosComponent } from './view/curriculos/curriculos.component';
import { VagasComponent } from './view/vagas/vagas.component';
import path from 'path';
import { PainelVagasComponent } from './view/painel-vagas/painel-vagas.component';
import { PainelCurriculosComponent } from './view/painel-curriculos/painel-curriculos.component';

const routes: Routes = [
    { path: '', component: InicioComponent }, // Rota para a página inicial
    { path: 'curriculos', component: CurriculosComponent }, // Rota para currículos
    { path: 'vagas', component: VagasComponent }, // Rota para vagas
    { path: 'painel-vagas', component: PainelVagasComponent },
    { path: 'painel-curriculos', component: PainelCurriculosComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }