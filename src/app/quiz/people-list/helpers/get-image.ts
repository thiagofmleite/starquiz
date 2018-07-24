import { People } from "../people/people";
import { ImageService } from "../image/image.service";

export function getImages(peoples: People[], service: ImageService) {
    return null; // prevent request: REMOVE WHEN FINISH
    // const promises$ = peoples.map(people => service.getImageFromGoogle(people.name.toLowerCase()));
    // promises$.map(promise => promise.then(
    //     image => image
    //         && peoples.find(people => people.name.toLowerCase() === image.query)
    //         && (peoples.find(people => people.name.toLowerCase() === image.query).image = image.url)
    // )
    //     .catch(error => console.log(error))
    // );
}