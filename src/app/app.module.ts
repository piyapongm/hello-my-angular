import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardsComponent } from './_components/dashboards/dashboards.component';
import { Error404Component } from './_components/error404/error404.component';
import { HeaderComponent } from './_components/structures/header/header.component';
import { Card1Component } from './_components/dashboard-cards/card1/card1.component';
import { Card2Component } from './_components/dashboard-cards/card2/card2.component';
import { Card3Component } from './_components/dashboard-cards/card3/card3.component';
import { Card4Component } from './_components/dashboard-cards/card4/card4.component';
import { CardCustomComponent } from './_components/dashboard-cards/card-custom/card-custom.component';
import { IconsModule } from './_modules/icons/icons.module';
import { BeginComponent } from './_components/begin/begin.component';
import { WorkshopComComponent } from './_components/workshops/workshop-com/workshop-com.component';
import { VoteComponent } from './_components/workshops/vote/vote.component';
import { VoteDisplayComponent } from './_components/workshops/vote-display/vote-display.component';
import { VoteButtomComponent } from './_components/workshops/vote-buttom/vote-buttom.component';
import { VoteScoreComponent } from './_components/workshops/vote-score/vote-score.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardsComponent,
    Error404Component,
    HeaderComponent,
    Card1Component,
    Card2Component,
    Card3Component,
    Card4Component,
    CardCustomComponent,
    BeginComponent,
    WorkshopComComponent,
    VoteComponent,
    VoteDisplayComponent,
    VoteButtomComponent,
    VoteScoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
