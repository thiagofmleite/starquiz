import { Component, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { People } from './people/people';
import { FilmService } from './film/film.service';
import { config } from 'src/app/core/app.config';
import { SpecieService } from './specie/specie.service';
import { getFilmsFromPeople, getSpeciesFromPeople, getPlanetFromPeople, urlsReplaced, getVehiclesFromPeople } from './helpers';
import { PlanetService } from './planet/planet.service';
import { VehicleService } from './vehicle/vehicle.service';
import { ActivatedRoute } from '@angular/router';
import { PeopleResponse } from './people/people-response';
import { ImageService } from './image/image.service';
import { PeopleService } from './people/people.service';
import { getImages } from 'src/app/quiz/people-list/helpers/get-image';
import { Answer } from '../survey/answer';
import { Survey } from '../survey/survey';
import { SurveyService } from '../survey/helpers/survey.service';

@Component({
    selector: 'app-people-list',
    templateUrl: './people-list.component.html',
})
export class PeopleListComponent implements OnInit, OnChanges {
    people: People;
    peoples: People[] = [];
    page: number = 1;
    response: PeopleResponse;
    survey: Survey;

    constructor(
        private service: PeopleService,
        private filmService: FilmService,
        private specieService: SpecieService,
        private planetService: PlanetService,
        private vehicleService: VehicleService,
        private imageService: ImageService,
        private surveyService: SurveyService,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(val => {
            this.survey = this.surveyService.getSurvey();
            this.page = this.activatedRoute.snapshot.params['page'];
            this.service.getPeople(this.page)
                .subscribe(response => {
                    this.response = response;
                    this.peoples = this.response.results;
                    getImages(this.peoples, this.imageService);
                }, err => console.log(err));
        });
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes);
        if (changes.page) {
            console.log(this.response.results);
        }

    }

    getPeopleInfo(people: People) {
        this.people = people;
        try {
            this.retriveData(people);
        } catch (error) {
            console.log(error.message);
        }

    }

    receiveAnswer(answer: Answer) {
        if (!this.isAnswerAnswered(answer)) {
            this.survey.answers.push(answer);
        } else {
            if (!this.isAlreadyCorrect(answer)) {
                this.overwriteAnswer(answer);
            }
        }
        this.setScore();
        this.surveyService.setSurvey(this.survey);
    }

    private retriveData(people: People): void {
        urlsReplaced(config.FILM_RULE, ...people.films)
            && getFilmsFromPeople(people, this.filmService);

        urlsReplaced(config.SPECIE_RULE, ...people.species)
            && getSpeciesFromPeople(people, this.specieService);

        urlsReplaced(config.PLANET_RULE, people.homeworld)
            && getPlanetFromPeople(people, this.planetService);

        urlsReplaced(config.VEHICLE_RULE, ...people.vehicles)
            && getVehiclesFromPeople(people, this.vehicleService);
    }

    private isAnswerAnswered(answer: Answer): boolean {
        if (this.getAnswer(answer)) {
            return true;
        } else {
            return false;
        }
    }

    private isAlreadyCorrect(answer: Answer): boolean {
        return this.getAnswer(answer).isCorrect;
    }


    private getAnswer(answer: Answer): Answer {
        return this.survey.answers.find(a => a.people.name === answer.people.name);
    }
    
    private overwriteAnswer(answer): void {
        this.survey.answers.map(a => {
            if(a.people.name === answer.people.name) {
                a = answer;
            }
        });
    }

    private setScore() {
        const corrects = this.survey.answers
            .filter(correct => correct.isCorrect)
            .map(hint => hint.useHint);
        const score = corrects.reduce((a, b) => b ? a + 5 : a + 10, 0);
        console.log(score);
    }
}
