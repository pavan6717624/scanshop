import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AmazonService {

  constructor(private http: HttpClient) { }

  
  createPageContent(formData: FormData)
  {
    return this.http.post('https://heidigi-app-38b2318c83b0.herokuapp.com/AMAZON/createPageContent',formData);
  }


}
