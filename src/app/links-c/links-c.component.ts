import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-links-c',
  templateUrl: './links-c.component.html',
  styleUrls: ['./links-c.component.css']
})
export class LinksCComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openLink(url){
    window.open(url, "infoWin");
  }

}
