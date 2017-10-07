import { Component, OnInit } from '@angular/core';
declare var newWindow: any;

@Component({
  selector: 'app-bible-study-c',
  templateUrl: './bible-study-c.component.html',
  styleUrls: ['./bible-study-c.component.css']
})
export class BibleStudyCComponent implements OnInit {
  onLineUrl: string = "http://oxfordchinesechurch.org/";
  offLineUrl: string = "http://oxfordchinesechurch.org/OfflineBibleDarby/";

  constructor() { }

  ngOnInit() {
  }

  openOnLine(url){
    newWindow = window.open(this.onLineUrl + url, "infoWin");
  }

  openLink(url){
    newWindow = window.open(url, "infoWin");
  }
}
