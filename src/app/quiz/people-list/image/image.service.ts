import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { config } from "src/app/core/app.config";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class ImageService {
    constructor(private http: HttpClient) { }

    getImages(q: string): Observable<any> {
        const params = new HttpParams()
            .append('count', '50')
            .append('autoCorrect', 'false')
            .append('q', q);
        let headers = new HttpHeaders();
        headers.append('X-Mashape-Key', config.MASHAPE_KEY)
        headers.append('X-Mashape-Host', config.MASHAPE_HOST);
        return this.http.get<any>(config.IMAGE_API, { headers: headers, params: params })
    }
}