import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { config } from "src/app/core/app.config";
import { DetailService } from "src/app/core/services/detail-service";
import { Observable } from "rxjs";
import { Specie } from "./specie";
@Injectable({ providedIn: 'root' })
export class SpecieService implements DetailService<Specie>{
    constructor(private http: HttpClient) { }

    getFromApi(api: string): Observable<Specie> {
        const rule = config.SPECIE_RULE;
        if (!rule.test(api)) {
            throw new Error('Invalid API Url!');
        }
        return this.http.get<Specie>(api);
    }
}