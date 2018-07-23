import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Film } from "./film";
import { config } from "src/app/core/app.config";
import { DetailService } from "src/app/core/services/detail-service";

@Injectable({ providedIn: 'root' })
export class FilmService implements DetailService<Film> {
    constructor(private http: HttpClient) { }

    getFromApi(api: string): Observable<Film> {
        const rule = config.FILM_RULE;
        if (!rule.test(api)) {
            throw new Error('Invalid API Url!');
        }
        return this.http.get<Film>(api);
    }
}