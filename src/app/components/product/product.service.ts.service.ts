import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar'
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceTsService {

  baseurl = "http://localhost:3001/products"
  constructor(private snackBar: MatSnackBar, private http: HttpClient){

  }
  

  showMessage(msg: string): void{
    console.log(msg, 'X',{
      duration:3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    });
    
  }

  create(product: Product): Observable<Product>{
    return this.http.post<Product>(this.baseurl, product)
  }
}
