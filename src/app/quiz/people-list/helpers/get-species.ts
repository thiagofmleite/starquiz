import { People } from "../people/people";
import { SpecieService } from "../specie/specie.service";

export function getSpeciesFromPeople(people: People, service: SpecieService) {
    const requests$ = people.species.map(api => service.getFromApi(api));
    people.species = []
    requests$.map(req => req.subscribe(
        response => people.species.push(response.name),
        error => console.log(error)
    ));
} 