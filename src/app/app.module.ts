import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OnePageComponent } from './one-page/one-page.component';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { FormationComponent } from './formation/formation.component';

const appRoutes: Routes = [
  {
    path: '',
    component: OnePageComponent
  },
  {
    path: 'accueil',
    component: OnePageComponent
  },
  {
    path: 'articles',
    component: ArticlesComponent
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
    OnePageComponent,
    ArticlesComponent,
    FormationComponent
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
