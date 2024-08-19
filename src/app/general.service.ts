import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
private readonly _httpclient=inject(HttpClient)
  getallproducte():Observable<any>{
return this._httpclient.get('https://fakestoreapi.com/products')
}
getSpecificjewelery():Observable<any>{
  return this._httpclient.get("https://fakestoreapi.com/products/category/jewelery")
}
getSpecificElctro():Observable<any>{
  return this._httpclient.get("https://fakestoreapi.com/products/category/electronics")
}
getSpecificMen():Observable<any>{
  return this._httpclient.get("https://fakestoreapi.com/products/category/men's clothing")
}
getSpecificWomen():Observable<any>{
  return this._httpclient.get("https://fakestoreapi.com/products/category/women's clothing")
}

}
