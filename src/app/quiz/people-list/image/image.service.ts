import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { config } from "src/app/core/app.config";
import { PixabayResponse } from "./pixabay-response";
import { ImageSearch } from "./image-search";
import { GoogleResponse } from "./google-response";

@Injectable({ providedIn: 'root' })
export class ImageService {
    constructor(private http: HttpClient) { }

    getImageFromGoogle(query: string): Promise<ImageSearch> {
        return new Promise((resolve, reject) => {
            const images = this.getStoredImages();
            const hasImage = images.find(image => image.query == query);
            if (hasImage) {
                resolve(hasImage);
            } else {
                this.getImageFromGoogleAPI(query)
                .then(image => {
                        this.addImage(image);
                        resolve(image);
                    })
                    .catch(error => reject(error));
            }
        });
    }

    private addImage(newImage: ImageSearch): void {
        let images = this.getStoredImages();
        if (images.length > 0 && images.find(image => image.query === newImage.query)) {
            images.map(image => {
                if (image.query === newImage.query) {
                    image = newImage;
                }
                return image
            });
        } else {
            images.push(newImage)
        }
        window.sessionStorage.setItem('images', JSON.stringify(images));
    }

    getStoredImages(): ImageSearch[] {
        const images = JSON.parse(window.sessionStorage.getItem('images')) as ImageSearch[] || [];
        return images;
    }

    private getImageFromGoogleAPI(query: string): Promise<ImageSearch> {
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


}