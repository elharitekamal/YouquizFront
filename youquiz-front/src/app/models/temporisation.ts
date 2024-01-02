import { Question } from "./question";
import { QuestionRes } from "./questionRes";
import { Test } from "./test";

export interface Temporisation {

  id?: number;
  time: string;
  test: Test;
  question: QuestionRes;

}