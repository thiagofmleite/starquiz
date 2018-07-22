import { People } from "../people/people";
import { VehicleService } from "../vehicle/vehicle.service";

export function getVehiclesFromPeople(people: People, service: VehicleService) {
    const requests$ = people.vehicles.map(api => service.getFromApi(api));
    people.vehicles = []
    requests$.map(req => req.subscribe(
        response => people.vehicles.push(response.name),
        error => console.log(error)
    ));
} 