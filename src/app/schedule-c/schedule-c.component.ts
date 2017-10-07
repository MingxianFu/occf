import { Component, OnInit, Input } from '@angular/core';
import { ScheduleComponent } from '../schedule/schedule.component';

@Component({
  selector: 'app-schedule-c',
  templateUrl: './schedule-c.component.html',
  styleUrls: ['../schedule/schedule.component.css']
})
export class ScheduleCComponent{

  @Input() sche: ScheduleComponent;

}
