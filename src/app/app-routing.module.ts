import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './homeSec/about-us/about-us.component';
import { LoginPageComponent } from './homeSec/login-page/login-page.component';
import { ScComponent } from './homeSec/sc/sc.component';


const routes: Routes = [
  {path: 'home', component:AboutUsComponent},
  {path: 'studentchapters', component: ScComponent},
  {path: 'login-page', component: LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AboutUsComponent, ScComponent, LoginPageComponent];
