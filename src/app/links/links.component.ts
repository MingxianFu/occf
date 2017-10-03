import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['../links-c/links-c.component.css']
})
export class LinksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openLink(url){
    window.open(url, "infoWin");
  }
}
