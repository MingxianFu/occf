import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SchDataService {

  constructor(private http: Http) { }

  fetchData(url: string){
    return this.http.get(url).map(
      (response) => response.json()
    )//.subscribe(
     // (data) => console.log(data)
    //)
  }

  success(){ 
    return "Successful";
  }
}
