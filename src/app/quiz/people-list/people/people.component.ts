import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { People } from './people';
import { Answer } from '../../survey/answer';


@Component({
    selector: 'app-people',
    templateUrl: './people.component.html',
})
export class PeopleComponent implements OnInit, OnChanges {
    noimage = 'assets/images/no-image.png';
    @Input() people: People;
    @Output() peopleInfo = new EventEmitter<People>();
    @Output() onAnswer = new EventEmitter<Answer>();

    answer: Answer;
    giveAGuess: boolean = false;

    constructor() { }

    ngOnInit(): void {
        this.answer = new Answer();
        this.answer.people = this.people;

    }

    ngOnChanges(changes: SimpleChanges): void {
        if(!changes.people.isFirstChange && changes.people) {
            this.answer.people = this.people;
        }
    }

    useHint(): void {
        this.peopleInfo.emit(this.people);
        this.answer.useHint = true;
    }

    receivePeopleName(name: string) {
        this.answer.guessName = name;
        this.guessName();
        this.onAnswer.emit(this.answer);
        this.guess();
    }

    guess() {
        this.giveAGuess = !this.giveAGuess;
    }

    private guessName(): void {
        const realName = this.answer.people.name.toLowerCase().trim().replace(/-/g, '');
        this.answer.isCorrect = (realName == this.answer.guessName);
    }
}
