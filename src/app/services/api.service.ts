import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'https://thesis-backend-sa.herokuapp.com';  
  sentiment: any;
  postData: any;

  constructor(private http: HttpClient) { }

  predictExample(example: string){
    this.postData = {
      text: example,
      sentiment: 99
    };

    console.log(this.postData);

    return this.http.post(this.baseUrl, this.postData);

  }
}
