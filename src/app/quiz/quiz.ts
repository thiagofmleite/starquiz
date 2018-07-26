import { Answer } from "./answer";

export class Quiz {
    sessionId: string;
    answers: Answer[];
    score: number;
    start: Date;
    finish: Date;

    constructor(sessionId: string) {
        this.sessionId = sessionId;
        this.answers = [];
        this.score = 0;
        this.start = new Date(Date.now());
        this.finish = new Date(this.start.getTime() + 2 * 60000);
    }
}