import { Component, OnInit, Input } from '@angular/core';
import { SchDataService } from '../sch-data.service';

@Component({
  selector: 'app-schedule-c',
  templateUrl: './schedule-c.component.html',
  styleUrls: ['../schedule/schedule.component.css']
})
export class ScheduleCComponent{
  schedules: Schedule[];

  constructor(private dataService: SchDataService) { }
    ngOnInit() {
    this.dataService.fetchData('assets/schedule-c.json').subscribe(schedules => {
        this.schedules = schedules;
    });   
  }

}

interface Schedule{
    date: string,
    sonleader: string,
    studycontent: string,
    studyleader: string,
    snack: string,
    Babysiter: string
}
