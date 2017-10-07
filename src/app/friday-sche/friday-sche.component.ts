import { Component, OnInit } from '@angular/core';
import { SchDataService } from '../sch-data.service';

@Component({
  selector: 'app-friday-sche',
  templateUrl: './friday-sche.component.html',
  styleUrls: ['../schedule/schedule.component.css']
})
export class FridayScheComponent implements OnInit {
    schedules: Schedule[];
  constructor(private dataService: SchDataService) { 

  }

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
