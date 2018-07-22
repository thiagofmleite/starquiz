import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { PeopleResponse } from "./people-response";
import { config } from "src/app/core/app.config";

@Injectable({ providedIn: 'root' })
export class PeopleService {
    constructor(private http: HttpClient) { }

    getPeople(page: number = 1): Observable<PeopleResponse> {
        const url = `${config.API_URL}/people/`;
        const params = (page) ? new HttpParams().append('page', page.toString()) : null;
        return this.http.get<PeopleResponse>(url, { params });

    }
}