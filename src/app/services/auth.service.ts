import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private SERVER_URL = environment.SERVER_URL
  constructor(private http: HttpClient) { }

  login(): Observable<any>{
    return this.http.get<any>(this.SERVER_URL+'/products/pcs')
  }
}