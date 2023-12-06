import { Subject } from 'src/app/models/subject';
import { Level } from 'src/app/models/level';


export interface Question {
    id?: number;
    numberOfResponses?: number;
    numberOfCorrectResponses?: number;
    questionText?: string;
    subject?: Subject;
    level?: Level;
}