import { Answer } from "./answer";
import { QuestionRes } from "./questionRes";

export interface Validation {
    id?: number;
    point: number,
    response: Answer,
    question: QuestionRes
}