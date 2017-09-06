import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Oxford Chinese Church';
  fullImagePath: string = '/assets/images/';

  constructor(){
      console.log("mmmm");
      if (window.location.hostname.indexOf('localhost') == -1)
        this.fullImagePath = '/occf/' + this.fullImagePath ; 
  }

  ngOnInit(){

  }
}
