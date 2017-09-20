import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Oxford Chinese Church';
  fullImagePath: string = '/assets/images/';
  showEng: boolean = false;

  constructor(private router: Router){      
      if (window.location.hostname.indexOf('localhost') == -1)
        this.fullImagePath = '/occf' + this.fullImagePath ; 

      console.log(window.location.hostname.indexOf('localhost'));
  }

  ngOnInit(){

  }

  toggleLang(){
      if (this.showEng == true){
         this.showEng = false; 
         this.router.navigate(['/welcomeC']);
      }else{
          this.showEng = true;
          this.router.navigate(['/welcome']);
      }
  }
}