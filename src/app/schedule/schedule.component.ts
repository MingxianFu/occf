import { Component, OnInit } from '@angular/core';
import { SchDataService } from '../sch-data.service';
declare var $;
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

  downloadPDF(){
    $("#fridaySche").tableExport(
      { type:'pdf',
        jspdf: {orientation: 'p',
                format: 'a3',
                margins: {left:20, right:20, top:20, bottom:20},
                autotable: {styles: {fillColor: 'inherit', 
                                    textColor: 'inherit'},
                            tableWidth: '800'}
              }
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