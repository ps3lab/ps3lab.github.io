import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FundingsPageComponent } from './pages/fundings-page/fundings-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PeoplePageComponent } from './pages/people-page/people-page.component';
import { PublicationsPageComponent } from './pages/publications-page/publications-page.component';

const routes: Routes = [
  {
    path:"publications",
    component: PublicationsPageComponent
  },
  {
    path:"fundings",
    component: FundingsPageComponent
  },
  {
    path:"people",
    component: PeoplePageComponent
  },
  {
    path:"",
    component: HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
