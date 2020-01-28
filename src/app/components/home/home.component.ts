import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent  {

  example: string;
  loading: boolean;
  sentiment: any;
  positiveResponse: boolean;
  negativeResponse: boolean;

  constructor( private api: ApiService ) {
    this.positiveResponse = false;
    this.negativeResponse = false;
    this.loading = false;
  }
  predict() {
    this.loading = true;
    this.positiveResponse = false;
    this.negativeResponse = false;
    this.api.predictExample(this.example).toPromise().then( (data: any) => {
      if(data.results.results === 0){
        this.negativeResponse = true;
        this.sentiment = 'Negativo';
      } else {
        this.positiveResponse = true;
        this.sentiment = 'Positivo';
      }
      this.loading = false;
      console.log(this.sentiment);
    }).catch(
      (error: any) => {
        console.log(error);
        this.loading = false;
      }
    );
  }
}
