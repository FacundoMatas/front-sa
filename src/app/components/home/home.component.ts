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
  sentiment: string;
  positiveResponse: boolean;
  negativeResponse: boolean;
  probability: number;

  constructor( private api: ApiService ) {
    this.positiveResponse = false;
    this.negativeResponse = false;
    this.loading = false;
  }
  predict() {
    this.loading = true;
    this.positiveResponse = false;
    this.negativeResponse = false;
    this.sentiment = '';
    this.api.predictExample(this.example).toPromise().then( (data: any) => {
      if(data.results.results === 0){
        this.negativeResponse = true;
        this.sentiment = 'Negativo';
      } else {
        this.positiveResponse = true;
        this.sentiment = 'Positivo';
      }
      this.probability = Number((data.results.probablity * 100).toFixed(2));
      this.loading = false;
      this.sentiment = this.sentiment.concat( ' - %' ).concat(this.probability.toString());
      console.log(this.sentiment);
    }).catch(
      (error: any) => {
        console.log(error);
        this.sentiment = 'Error al obtener la respuesta';
        this.negativeResponse = true;
        this.loading = false;
      }
    );
  }
}
