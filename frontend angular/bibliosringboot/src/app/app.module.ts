import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AdherentService } from './adherent/adherent.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivreComponent } from './livre/livre.component';
import { AdherentComponent } from './adherent/adherent.component';
import { RevueComponent } from './revue/revue.component';
import { DictionnaireComponent } from './dictionnaire/dictionnaire.component';
import { EmpruntComponent } from './emprunt/emprunt.component';
import { DocumentComponent } from './document/document.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LivreComponent,
    AdherentComponent,
    RevueComponent,
    DictionnaireComponent,
    EmpruntComponent,
    DocumentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AdherentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
