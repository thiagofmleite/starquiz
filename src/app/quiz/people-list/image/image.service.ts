import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { config } from "src/app/core/app.config";
import { PixabayResponse } from "./pixabay-response";
import { ImageSearch } from "./image-search";
import { GoogleResponse } from "./google-response";

@Injectable({ providedIn: 'root' })
export class ImageService {
    constructor(private http: HttpClient) { }

    // getImages(q: string): Observable<any> {
    //     const params = new HttpParams()
    //         .append('count', '50')
    //         .append('autoCorrect', 'false')
    //         .append('q', q);
    //     let headers = new HttpHeaders();
    //     headers.append('X-Mashape-Key', config.MASHAPE_KEY)
    //     headers.append('X-Mashape-Host', config.MASHAPE_HOST);
    //     return this.http.get<any>(config.IMAGE_API, { headers: headers, params: params })
    // }

    getImageFromGoogle(query: string): Promise<ImageSearch> {
        return new Promise((resolve, reject) => {
            const params = new HttpParams()
                .append('q', `star wars ${query}`)
                .append('key', config.GOOGLE_KEY)
                .append('cx', config.GOOGLE_CX);
            this.http.get<GoogleResponse>(config.GOOGLE_API, { params })
                .subscribe(response => {
                    const image = response.items[0].pagemap.cse_thumbnail[0];
                    const result = { query: query, url: image.src } as ImageSearch;
                    resolve(result);
                }, error => reject(error));
        });
    }

    getImageFromPixabay(query: string): Promise<ImageSearch> {
        return new Promise((resolve, reject) => {
            const params = new HttpParams()
                .append('key', config.PIXABAY_KEY)
                .append('q', query);
            this.http.get<PixabayResponse>(config.PIXABAY_API, { params })
                .subscribe(response => {
                    if (response.totalHits > 0) {
                        const image = response.hits[0];
                        const result = { query: query, url: image.largeImageURL } as ImageSearch;
                        resolve(result);
                    } else {
                        resolve(null);
                    }
                }, error => reject(error));
        });
    }
}