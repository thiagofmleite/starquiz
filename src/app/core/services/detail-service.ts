import { Observable } from "rxjs";

export interface DetailService<T> {
    getFromApi(api: string): Observable<T>;
}