import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  URL = "https://localhost:5001/api/Products/";
  constructor(private http: HttpClient) { }

  public getProduct(id)
  {
    var url = this.URL+id
    return this.http.get(url)
  }
}
