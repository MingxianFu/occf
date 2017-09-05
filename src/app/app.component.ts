import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Oxford Chinese Church';
  fullImagePath: string;

  constructor(){
      console.log("mmmm");
      this.fullImagePath = '/assets/images/cross.jpg';
  }

  ngOnInit(){

  }
}
