import {  DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';

import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// MEUS BLOCOS DE CÓDIGO
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { RodapeComponent } from './rodape/rodape.component';
import { SessionTimerComponent } from './session-timer/session-timer.component';
 
// MATERIAL UI
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AdminComponent } from './admin/admin.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

registerLocaleData(ptBr);

@NgModule({
    declarations: [
        AppComponent,
        QuemSomosComponent,
        CabecalhoComponent,
        SessionTimerComponent,
        AdminComponent,
    ],
    providers: [
        { provide: LOCALE_ID, useValue: 'pt' },
        { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' }
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        RodapeComponent,
        HttpClientModule, 
        MatSnackBarModule
    ]
})
export class AppModule { }