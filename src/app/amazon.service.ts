import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AmazonService {

  constructor(private http: HttpClient) { }

  //  url: string = 'http://localhost:8081/';

  url: string = 'https://heidigi-app-38b2318c83b0.herokuapp.com/';

  createPageContent(formData: FormData) {
    return this.http.post(this.url + 'AMAZON/createPageContent', formData);
  }

  savePageContent(formData: FormData) {
    return this.http.post(this.url + 'AMAZON/savePageContent', formData);
  }

  getPageContents(formData: FormData) {
    return this.http.post(this.url + 'AMAZON/getPageContents', formData);
  }

  getPageContent(formData: FormData) {
    return this.http.post(this.url + 'AMAZON/getPageContent', formData);
  }


}
