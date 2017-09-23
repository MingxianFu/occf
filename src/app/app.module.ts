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
import { BibleStudyComponent } from './bible-study/bible-study.component';
import { BibleStudyCComponent } from './bible-study-c/bible-study-c.component';
import { LinksComponent } from './links/links.component';
import { LinksCComponent } from './links-c/links-c.component';
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
    FridayScheComponent,
    BibleStudyComponent,
    BibleStudyCComponent,
    LinksComponent,
    LinksCComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'welcomeC', pathMatch: 'full' },
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
        path: 'testimonyC/:showAudio',
        component: TestimonyCComponent
      },
      {
        path: 'scheduleC',
        component: ScheduleCComponent
      },
      {
        path: 'bibleStudy',
        component: BibleStudyComponent
      },
      {
        path: 'bibleStudyC',
        component: BibleStudyCComponent
      },
      {
        path: 'links',
        component: LinksComponent
      },
      {
        path: 'linksC',
        component: LinksCComponent
      }       
    ])

  ],
  providers: [SchDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
