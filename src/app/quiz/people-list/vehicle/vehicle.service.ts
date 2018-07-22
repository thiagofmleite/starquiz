import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { config } from "src/app/core/app.config";
import { Vehicle } from "./vehicle";

@Injectable({ providedIn: 'root' })
export class VehicleService {
    constructor(private http: HttpClient) { }

    getFromApi(api: string): Observable<Vehicle> {
        const rule = config.VEHICLE_RULE;
        if (!rule.test(api)) {
            throw new Error('Invalid API Url!');
        }
        return this.http.get<Vehicle>(api);
    }
}