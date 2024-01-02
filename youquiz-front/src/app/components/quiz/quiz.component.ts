import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { timer } from 'rxjs';
import { AnswerEtudiant } from 'src/app/models/answerEtudiant';
import { Validation } from 'src/app/models/validation';
import { AnswerService } from 'src/app/services/answer.service';
import { TemporisationService } from 'src/app/services/temporisation.service';
import { ValidationService } from 'src/app/services/validation.service';
import { forkJoin } from 'rxjs';



@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  forScore: AnswerEtudiant[] = [];
  buttonClickStates: { [key: number]: boolean } = {};

  Answers:AnswerEtudiant[] = [];

  visibility: boolean = false;
  temporisations: any[] = [];
  responses: Validation[] = [];
  subscribeTimer: number = 0;
  timeLeft: number = 100; 
  id_question: number = 0;
  indice: number = 0;
  x: number = this.temporisations.length;
  questionId: number = 0;


  totalPoints: number = 0;


  constructor(private temService: TemporisationService, private validationService: ValidationService, private router: Router, private answerEtudiantService: AnswerService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.observableTimer();
    this.loadQuestion();
    this.questionId = this.getFirstQuestionId();
    this.getValidationByQst(this.questionId);
  }

  
  nextQuestion(id: number) {
  this.Answers.forEach(answer => {
    this.answerEtudiantService.addAnswerEtudiant(answer).subscribe(
      (data) => {
        console.log(data);
      }
    );
  });

  this.x = this.temporisations.length;
  if (this.indice < this.x - 1) {
    this.indice = this.indice + 1;
  } else {
    forkJoin(this.Answers.map(answer =>
      this.answerEtudiantService.addAnswerEtudiant(answer)
    )).subscribe(() => {
      this.getPoints();
      this.visibility = !this.visibility;
    });
  }

  this.getValidationByQst(id);

  for (const answer of this.Answers) {
    this.forScore.push(answer);
  }

  this.Answers = [];

  console.log('forscore', this.forScore);
}




  observableTimer() {
    const source = timer(1000, 1000);
    const abc = source.subscribe(val => {
      this.subscribeTimer = this.timeLeft - val;
      if (this.subscribeTimer <= 0) {
        abc.unsubscribe();
      }
    });
  }

 loadQuestion() {
  console.log('loadQuestion');
  const code = this.route.snapshot.params['code'];
  this.temService.getAllTestAsseigned(code).subscribe((data) => {
    this.temporisations = data;
    console.log('Temporisations:', this.temporisations);

    if (this.temporisations.length > 0) {
      this.questionId = this.getFirstQuestionId();
      console.log('Question ID:', this.questionId);
      this.getValidationByQst(this.questionId);
    } else {
      console.warn('No questions available.');
    }
  });
}

getFirstQuestionId(): number {
  return this.temporisations.length > 0 ? this.temporisations[this.indice]?.question.id : null;
}

getValidationByQst(qs: number) {
  console.log('getValidationByQst');
  if (qs !== undefined && typeof qs === 'number') {
    this.validationService.getResponses(qs).subscribe(callback => {
      this.responses = callback;
      console.log('Responses:', this.responses);
    });
  }

}



cancel():void{
  this.visibility =! this.visibility;
  console.log(this.visibility)
  this.router.navigateByUrl('allquizes');
}




addAnswer(id: number | undefined): void {
  const addedAnswer: AnswerEtudiant = {
    validation_id: id!,
    assignment_id: this.route.snapshot.params['code'],
  };

  const existingIndex = this.Answers.findIndex(answer => answer.validation_id === addedAnswer.validation_id);

  if (existingIndex !== -1) {
    this.Answers.splice(existingIndex, 1);
  }else{
  this.Answers.push(addedAnswer);

  }

   this.buttonClickStates[id!] = !this.buttonClickStates[id!];

  console.log(this.Answers);
  
}

  
getPoints(): void {
  this.totalPoints = 0;

  const observables = this.forScore.map(val =>
    this.validationService.getPoints(val.validation_id)
  );

  forkJoin(observables).subscribe(
    (pointsArray: number[]) => {
      this.totalPoints = pointsArray.reduce((total, points) => total + points, 0);
      console.log('Total Points:', this.totalPoints);
    }
  );
}


}