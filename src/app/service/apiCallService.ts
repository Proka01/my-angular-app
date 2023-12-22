import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
  })
export class ApiCallServiceService {
    private baseUrl = 'http://localhost:8080';

    constructor(private http: HttpClient) {}

    loginUser(credentials: any): Observable<any> {
        console.log(credentials);
        console.log(`${this.baseUrl}/auth/login`)
        return this.http.post(`${this.baseUrl}/auth/login`, credentials);
    }
}