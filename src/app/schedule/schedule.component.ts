import { Component, OnInit } from '@angular/core';
import { SchDataService } from '../sch-data.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {  
  schedules: Schedule[];
  constructor(private dataService: SchDataService) { }

  ngOnInit() {  
    this.dataService.fetchData('assets/schedule.json').subscribe(schedules => {
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