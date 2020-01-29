import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { FormationComponent } from './formation/formation.component';
import { ContainerComponent } from './container/container.component';
import { MissionComponent } from './container/mission/mission.component';
import { PrincipesComponent } from './container/principes/principes.component';
import { ActionsComponent } from './container/actions/actions.component';
import { EcosystemeComponent } from './container/ecosysteme/ecosysteme.component';
import { PolesComponent } from './container/poles/poles.component';
import { TerresRaresComponent } from './articles/terres-rares/terres-rares.component';
import { TutoComponent } from './articles/tuto/tuto.component';
import { BonnesPratiquesComponent } from './articles/bonnes-pratiques/bonnes-pratiques.component';
import { RebondComponent } from './articles/rebond/rebond.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ContainerComponent, children: [
      {path: 'mission', component: MissionComponent},
      {path: 'principes', component: PrincipesComponent},
      {path: 'anctions', component: ActionsComponent},
      {path: 'ecosysteme', component: EcosystemeComponent},
      {path: 'poles', component: PolesComponent},
    ]
  },
  //{
  //   path: 'accueil',
  //   component: ContainerComponent
  // },
  {
    path: '#poles',
    component: ContainerComponent
  },
  {
    path: 'articles',
    component: ArticlesComponent
  },
  {
    path: 'articles/terres-rares',
    component: TerresRaresComponent
  },
  {
    path: 'articles/tutoRaspi',
    component: TutoComponent
  },
  {
    path: 'articles/Bonnes_pratiques',
    component: BonnesPratiquesComponent
  },
  {
    path: 'articles/rebond',
    component: RebondComponent
  },
  {
    path: 'formation',
    component: FormationComponent
  },
  { path: '**', redirectTo: '' },

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ArticlesComponent,
    FormationComponent,
    ContainerComponent,
    MissionComponent,
    PrincipesComponent,
    ActionsComponent,
    EcosystemeComponent,
    PolesComponent,
    TerresRaresComponent,
    TutoComponent,
    BonnesPratiquesComponent,
    RebondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
