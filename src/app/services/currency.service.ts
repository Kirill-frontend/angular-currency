import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {IResponse } from '../models/currency';
import { ISymbols } from './../models/currency';



@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  constructor(private http: HttpClient) {}

  getCurr(base: string = 'USD'): Observable<IResponse> {
    return this.http.get<IResponse>(`https://api.exchangerate.host/latest?base=${base}`
    )
  }
  getSymbols(): Observable<ISymbols> {
    return this.http.get<ISymbols>(`https://api.exchangerate.host/symbols`)
  }
}
