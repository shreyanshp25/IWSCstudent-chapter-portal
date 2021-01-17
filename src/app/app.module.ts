import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './homeSec/header/header.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './homeSec/footer/footer.component';
import { AboutUsComponent } from './homeSec/about-us/about-us.component';
import { ScComponent } from './homeSec/sc/sc.component';
import { NewScFormComponent } from './homeSec/new-sc-form/new-sc-form.component';
import { CarouselComponent } from './Team/carousel/carousel.component';
import { TeamStatsComponent } from './Team/team-stats/team-stats.component';
import { TeamComponent } from './Team/team/team.component';
import { MembersComponent } from './Members/members/members.component';
import { SignupComponent } from './homeSec/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    routingComponents,
    FooterComponent,
    NewScFormComponent,
    CarouselComponent,
    TeamStatsComponent,
    TeamComponent,
    MembersComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
