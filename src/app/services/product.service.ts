import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private SERVER_URL = environment.SERVER_URL
  constructor(private http: HttpClient) { }

  //Get all pcs
  getProductsByCategory(category: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.SERVER_URL+`products/${category}`)
  }

  getProductById(category: string, id: string): Observable<Product> {
    return this.http.get<Product>(this.SERVER_URL+`products/${category}/${id}`)
  }
  searchProduct(search: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.SERVER_URL+`products?search=${search}`)

  }
}
