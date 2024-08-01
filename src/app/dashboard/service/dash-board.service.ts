import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashBoardService {
 private baseUrl="http://localhost:3000";
  constructor(public http:HttpClient) { }
  productdatafun(postdata: any): Observable<any> {    
    return this.http.post(`${this.baseUrl}/productupload`, postdata)
  }
  showData():Observable<any>{
    return this.http.get(`${this.baseUrl}/getAll`)
  }
}
