import { People } from "../people/people";
import { ImageService } from "../image/image.service";

export function getImages(peoples: People[], service: ImageService) {
    const promises$ = peoples.map(people => service.getImageFromGoogle(people.name.toLowerCase()));
    promises$.map(promise => promise.then(
        image => image
            && peoples.find(people => people.name.toLowerCase() === image.query)
            && (peoples.find(people => people.name.toLowerCase() === image.query).image = image.url)
    )
        .catch(error => {
            if(error.status == 403) {
                console.warn('A API do Google ultrapassou o limite');
            } else {
                console.error('Ocorreu um erro');
            }

        })
    );
}