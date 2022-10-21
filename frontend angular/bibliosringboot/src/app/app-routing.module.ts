import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivreComponent } from './livre/livre.component';
import { AdherentComponent } from './adherent/adherent.component';
import { RevueComponent } from './revue/revue.component';
import { DictionnaireComponent } from './dictionnaire/dictionnaire.component';
import { EmpruntComponent } from './emprunt/emprunt.component';
import { DocumentComponent } from './document/document.component';
const routes: Routes = [
  {
    path:  'livre',
    component: LivreComponent,
    pathMatch: 'full',
  },
  {
    path:  'adherent',
    component: AdherentComponent,
    pathMatch: 'full',
  },
  {
    path:  'revue',
    component: RevueComponent,
    pathMatch: 'full',
  },
  {
    path:  'dictionnaire',
    component: DictionnaireComponent,
    pathMatch: 'full',
  },
  {
    path:  'emprunt',
    component: EmpruntComponent,
    pathMatch: 'full',
  },
  {
    path:  'document',
    component: DocumentComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
