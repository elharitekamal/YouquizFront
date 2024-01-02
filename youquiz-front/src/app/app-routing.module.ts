import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LevelComponent } from './components/level/level.component';
import { SubjectComponent } from './components/subject/subject.component';
import { ResponseComponent } from './components/response/response.component';
import { QuestionComponent } from './components/question/question.component';
import { AddLevelComponent } from './components/add-level/add-level.component';
import { UpdateLevelComponent } from './components/update-level/update-level.component';
import { AddSubjectComponent } from './components/add-subject/add-subject.component';
import { AddQuestionComponent } from './components/add-quest/add-quest.component';
import { AddResponseComponent } from './components/add-response/add-response.component';
import { AssignementComponent } from './components/assignement/assignement.component';
import { AddAssignementComponent } from './components/add-assignement/add-assignement.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { AllquizesComponent } from './components/allquizes/allquizes.component';

const routes: Routes = [
  {path : 'level-component', component: LevelComponent},
  {path : 'allquizes', component: AllquizesComponent},
  {path : 'response-component', component: ResponseComponent},
  {path : 'subject-component', component: SubjectComponent},
  {path : 'assignement-component', component: AssignementComponent},
  {path : 'subject-component/add-subject', component: AddSubjectComponent},
  {path : 'level-component/add-level', component: AddLevelComponent},
  {path : 'level-component/update-level', component: UpdateLevelComponent},
  {path : 'question-component/add-question', component: AddQuestionComponent},
  {path : 'quiz-component/:code', component: QuizComponent},
  {path : 'assignement-component/add-assignement', component: AddAssignementComponent},
  {path : 'response-component/add-response', component: AddResponseComponent},
  {path : 'question-component', component: QuestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
