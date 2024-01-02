import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LevelComponent } from './components/level/level.component';
import { QuestionComponent } from './components/question/question.component';
import { SubjectComponent } from './components/subject/subject.component';
import { ResponseComponent } from './components/response/response.component';
import { HttpClientModule } from '@angular/common/http';
import { AddLevelComponent } from './components/add-level/add-level.component';
import { FormsModule } from '@angular/forms';
import { AddSubjectComponent } from './components/add-subject/add-subject.component';
import { UpdateLevelComponent } from './components/update-level/update-level.component';
import { AddQuestionComponent } from './components/add-quest/add-quest.component';
import { AddResponseComponent } from './components/add-response/add-response.component';
import { AssignementComponent } from './components/assignement/assignement.component';
import { AddAssignementComponent } from './components/add-assignement/add-assignement.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { AllquizesComponent } from './components/allquizes/allquizes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LevelComponent,
    QuestionComponent,
    SubjectComponent,
    ResponseComponent,
    AddLevelComponent,
    AddSubjectComponent,
    UpdateLevelComponent,
    AddQuestionComponent,
    AddResponseComponent,
    AssignementComponent,
    AddAssignementComponent,
    QuizComponent,
    AllquizesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
