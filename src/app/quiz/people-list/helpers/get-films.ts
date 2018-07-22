import { People } from "../people/people";
import { FilmService } from "../film/film.service";

export function getFilmsFromPeople(people: People, service: FilmService) {
    const requests$ = people.films.map(api => service.getFromApi(api));
    people.films = []
    requests$.map(req => req.subscribe(
        response => people.films.push(response.title),
        error => console.log(error)
    ));
} 