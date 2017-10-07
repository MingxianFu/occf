import { Component, OnInit } from '@angular/core';
declare var newWindow: any;

@Component({
  selector: 'app-fellowship-c',
  templateUrl: './fellowship-c.component.html',
  styleUrls: ['./fellowship-c.component.css']
})
export class FellowshipCComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openLink(url){
    newWindow = window.open("http://oxfordchinesechurch.org/" + url, "infoWin");
  }

  openInnerLink(url){
     newWindow = window.open("http://oxfordchinesechurch.org/PhotoAlbums/" + url, "infoWin");
  }

  openOCCFLink(url){
    newWindow = window.open("http://www.olemiss.edu/orgs/ccf/event_albums/" + url, "infoWin");
  }
}
