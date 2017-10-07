import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

declare var newWindow: any;
@Component({
  selector: 'app-testimony-c',
  templateUrl: './testimony-c.component.html',
  styleUrls: ['./testimony-c.component.css']
})
export class TestimonyCComponent implements OnInit {
  essayUrl: string = "http://oxfordchinesechurch.org/essay/";
  audioUrl: string = "http://oxfordchinesechurch.org/mp3/testimony/";


  showAudio: boolean = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
         this.paramsChanged(params['showAudio']);
       });
  }

  paramsChanged(showAudio) {
     if (this.route.snapshot.params['showAudio'] == 1)
        this.showAudio = true;
     else 
        this.showAudio = false;
    }

  toggleAudio(showAudio){
    this.showAudio = showAudio;
  }

  openEssay(url){
    newWindow = window.open(this.essayUrl + url, "infoWin");
  }

  openAudio(url){
    newWindow = window.open(this.audioUrl + url, "infoWin");
  }
}
