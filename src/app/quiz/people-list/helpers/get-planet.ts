import { People } from "../people/people";
import { PlanetService } from "../planet/planet.service";

export function getPlanetFromPeople(people: People, service: PlanetService) {
    const request$ = service.getFromApi(people.homeworld);
    people.homeworld = '';
    request$.subscribe(
        response => people.homeworld = response.name,
        error => console.log(error)
    );
}