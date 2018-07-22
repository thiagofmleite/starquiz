import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Film } from "./film";

@Injectable({ providedIn: 'root' })
export class FilmService {
    constructor(private http: HttpClient) { }

    getFilm(api: string): Observable<Film> {
        const rule = /^https:\/\/swapi.co\/api\/films\/\d+\/$/;
        if (!rule.test(api)) {
            throw new Error('Invalid API Url!');
        }
        return this.http.get<Film>(api);
    }
}