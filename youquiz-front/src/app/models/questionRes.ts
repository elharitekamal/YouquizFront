import { Level } from 'src/app/models/level';
import { SubjectRes } from './subjectRes';


export interface QuestionRes {
    id?: number ,
    numberOfCorrectResponses ?: number | null;
    numberOfResponses ?: number | null;
    questionText ?: string | null;
    type ?: string;
    subject ?: SubjectRes | null;
    level ?: Level | null;
}