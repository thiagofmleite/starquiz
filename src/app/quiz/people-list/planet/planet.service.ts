import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { config } from "src/app/core/app.config";
import { DetailService } from "src/app/core/services/detail-service";
import { Planet } from "./planet";

@Injectable({ providedIn: 'root' })
export class PlanetService implements DetailService<Planet> {
    constructor(private http: HttpClient) { }

    getFromApi(api: string): Observable<Planet> {
        const rule = config.PLANET_RULE;
        if (!rule.test(api)) {
            throw new Error('Invalid API Url!');
        }
        return this.http.get<Planet>(api);
    }
}