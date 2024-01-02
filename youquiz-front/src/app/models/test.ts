import { Trainer } from "./trainer";

export interface Test {
    id?: number;
    successScore: number;
    canViewAnswers: number;
    canSeeResult: boolean;
    numberOfChances: number;
    remarks: string;
    instructions: string;
    trainer: Trainer;
}