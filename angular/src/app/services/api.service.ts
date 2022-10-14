import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Permissions } from "./permissions.service";


const BASE_URL = 'http://localhost:3000'

@Injectable()
export class Api {
    constructor(private http: HttpClient, private permissions: Permissions) {

    }
    login(user: { user: string, pass: string }) {
        return this.http.post(BASE_URL + '/login', user);
    }

    getWeather() {
        return this.http.get(BASE_URL + '/weather', { headers: { Authorization: this.permissions.token } });
    }

    getTenant(): Observable<Array<any>> {
        return this.http.get(BASE_URL + '/tenant') as any;
    }
}