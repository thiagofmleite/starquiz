import { Injectable } from "@angular/core";
import { config } from "src/app/core/app.config";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Specie } from "./specie";
@Injectable({ providedIn: 'root' })
export class SpecieService {
    constructor(private http: HttpClient) { }

    getFromApi(api: string): Observable<Specie> {
        const rule = config.SPECIE_RULE;
        if (!rule.test(api)) {
            throw new Error('Invalid API Url!');
        }
        return this.http.get<Specie>(api);
    }
}