import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './view/inicio/inicio.component';
import { CurriculosComponent } from './view/curriculos/curriculos.component';
import { VagasComponent } from './view/vagas/vagas.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { PainelVagasComponent } from './view/painel-vagas/painel-vagas.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        InicioComponent,
        CurriculosComponent,
        VagasComponent,
        HeaderComponent,
        FooterComponent,
        PainelVagasComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }