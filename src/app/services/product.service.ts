import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private SERVER_URL = environment.SERVER_URL
  constructor(private http: HttpClient) { }

  //Get all pcs
  getAllPcs(): Observable<any> {
    return this.http.get<any>(this.SERVER_URL+'/products/pcs')
  }
}
