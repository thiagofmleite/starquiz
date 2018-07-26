import { People } from "../people-list/people/people";

export class Answer {
    guessName: string;
    people: People;
    useHint: boolean = false;
    isCorrect: boolean = false;
}