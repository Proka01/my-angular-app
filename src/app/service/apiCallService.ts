import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
  })
export class ApiCallServiceService {
    private baseUrl = 'http://localhost:8080';

    constructor(private http: HttpClient) {}

    private getHeaders(): HttpHeaders {
        const token = localStorage.getItem('jwtToken');
        return new HttpHeaders().set('Authorization', `Bearer ${token}`);
    }

    loginUser(credentials: any): Observable<any> {
        console.log(credentials);
        console.log(`${this.baseUrl}/auth/login`)
        return this.http.post(`${this.baseUrl}/auth/login`, credentials);
    }

    getAllUsers(): Observable<any[]> {
        const headers = this.getHeaders();
        return this.http.get<any[]>(`${this.baseUrl}/users`, { headers });
    }

    updateUser(user: any): Observable<any> {
        const headers = this.getHeaders();
        return this.http.post(`${this.baseUrl}/users/update`, user, { headers });
    }
}