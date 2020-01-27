import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'https://thesis-backend-sa.herokuapp.com';
  postData = {
    text: 'Mala idea',
    sentiment: 0
  };

  constructor(private http: HttpClient) { }

  predictExample(){
    return this.http.post(this.baseUrl, this.postData)
    .toPromise().then(data => {
      console.log(data);
    });

  }
}
