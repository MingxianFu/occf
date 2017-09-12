import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Oxford Chinese Church';
  fullImagePath: string = '/assets/images/';
  showEng: boolean = false;

  constructor(){      
      if (window.location.hostname.indexOf('localhost') == -1)
        this.fullImagePath = '/occf' + this.fullImagePath ; 

      console.log(window.location.hostname.indexOf('localhost'));
  }

  ngOnInit(){

  }

  toggleLang(){
      if (this.showEng == true){
         this.showEng = false; 
      }else{
          this.showEng = true;
      }
  }
}
