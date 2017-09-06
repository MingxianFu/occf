import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { TestimonyComponent } from './testimony/testimony.component';
import { FellowshipComponent } from './fellowship/fellowship.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WelcomeCComponent } from './welcome-c/welcome-c.component';
import { FellowshipCComponent } from './fellowship-c/fellowship-c.component';
import { TestimonyCComponent } from './testimony-c/testimony-c.component';
import { ScheduleCComponent } from './schedule-c/schedule-c.component';
import { SchDataService } from './sch-data.service';
import { FridayScheComponent } from './friday-sche/friday-sche.component';
@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    TestimonyComponent,
    FellowshipComponent,
    WelcomeComponent,
    WelcomeCComponent,
    FellowshipCComponent,
    TestimonyCComponent,
    ScheduleCComponent,
    FridayScheComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'welcome',
        component: WelcomeComponent
      },
      {
        path: 'fellowship',
        component: FellowshipComponent
      },
      {
        path: 'testimony',
        component: TestimonyComponent
      },
      {
        path: 'schedule',
        component: ScheduleComponent
      },
      {
        path: 'welcomeC',
        component: WelcomeCComponent
      },
      {
        path: 'fellowshipC',
        component: FellowshipCComponent
      },
      {
        path: 'testimonyC',
        component: TestimonyCComponent
      },
      {
        path: 'scheduleC',
        component: ScheduleCComponent
      }     
    ])

  ],
  providers: [SchDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }