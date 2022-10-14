import { Component, OnInit } from "@angular/core";
import { catchError, EMPTY, Observable, of, throwError } from "rxjs";
import { Api } from "../services";


@Component({
    templateUrl: './weather.component.html'
})
export class Weather {
    error = '';
    weather$: Observable<any> = this.api.getWeather().pipe(
        catchError(error => {
            if (error.error instanceof ErrorEvent) {
                this.error = `Error: ${error.error.message}`;
            } else {
                this.error = `Error: ${error.message}`;
            }
            return of([]);
        })

    );
    constructor(private api: Api) { }




}