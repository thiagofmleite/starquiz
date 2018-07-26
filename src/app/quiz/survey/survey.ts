import { Answer } from "./answer";

export class Survey {
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
    }
}