import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {


  URL = "https://localhost:5001/api/Category";
  constructor(private http: HttpClient) { }


  public getCategories()
  {
    return this.http.get(this.URL)
  }
}
