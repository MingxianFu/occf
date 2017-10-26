import { Component, OnInit, Input } from '@angular/core';
import { SchDataService } from '../sch-data.service';
import * as jsPDF from 'jspdf';
declare var jquery:any;   // not required
declare var $ :any;   // not required

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

  downloadPDF(){
    $('#fridaySche').tableExport({type:'excel'});
 
    /*$("#fridaySche").tableExport(
      { type:'doc',
        jspdf: {orientation: 'l',
                format: 'a3',
                margins: {left:20, right:20, top:20, bottom:20},
                autotable: {styles: {fillColor: 'inherit', 
                                    textColor: 'inherit'},
                            tableWidth: 'auto'}
              }
      });*/
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
