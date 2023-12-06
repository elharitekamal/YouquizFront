import { Answer } from "./answer";
import { QuestionRes } from "./questionRes";

export interface AssignementRes {

    id?: number;
    point: number,
    response: Answer,
    question:QuestionRes


}