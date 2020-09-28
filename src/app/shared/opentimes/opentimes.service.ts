import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { OpentimeModel } from "./opentime.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OpentimesService {

  constructor(private http: HttpClient) { }

  getOpentimes(): Observable<OpentimeModel>
  {
    return this.http.get<OpentimeModel>(environment.appUrl + '/lib/openclosed.php');
  }
}
