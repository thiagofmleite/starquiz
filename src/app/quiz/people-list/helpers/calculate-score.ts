import { Quiz } from "../../quiz";

export function calculateScore(quiz: Quiz) {
    const corrects = quiz.answers
        .filter(correct => correct.isCorrect)
        .map(hint => hint.useHint);
    return corrects.reduce((a, b) => b ? a + 5 : a + 10, 0);
}