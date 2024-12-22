import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AmazonService {

  constructor(private http: HttpClient) { }

  
  createPageContent(formData: FormData)
  {
    return this.http.post('http://localhost:8081/AMAZON/createPageContent',formData);
  }


}
