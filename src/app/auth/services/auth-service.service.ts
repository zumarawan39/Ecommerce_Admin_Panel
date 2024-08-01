import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private api="http://localhost:3000";
  constructor(  public http:HttpClient) { }
    //signin tecaher
    Sign_in(data:any):Observable<any>{    
      console.log(data);
        return    this.http.post<any>(`${this.api}/signUp`,data); ;
    }
    //login teacher
    login(data:any):Observable<any>{    
      console.log(data);
        return    this.http.post<any>(`${this.api}/login`,data); 
    };
}
