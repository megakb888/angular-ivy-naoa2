import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  sendContactFormBasic(form): Observable<any>
  {
    return this.http.post<any[]>(environment.appUrl + 'api/nao/contact/sendContactFormBasic', form);
  }

  sendContactFormBusiness(form): Observable<any>
  {
    return this.http.post<any[]>(environment.appUrl + 'api/nao/contact/sendContactFormBusiness', form);
  }
}
