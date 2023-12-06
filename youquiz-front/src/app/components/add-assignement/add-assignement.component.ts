import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Answer } from 'src/app/models/answer';
import { AssignementRes } from 'src/app/models/assignementRes';
import { QuestionRes } from 'src/app/models/questionRes';
import { AssignementService } from 'src/app/services/assignement.service';
import { QuestionService } from 'src/app/services/question.service';
import { ResponseService } from 'src/app/services/response.service';

@Component({
  selector: 'app-add-assignement',
  templateUrl: './add-assignement.component.html',
  styleUrls: ['./add-assignement.component.css']
})
export class AddAssignementComponent implements OnInit {

  assignements: AssignementRes[] = [];
  questions: QuestionRes[] = [];
  responses: Answer[] = [];


  point: number = 0;
  response_id: number = 0;
  question_id: number = 0;


  constructor(private serviceAssignement: AssignementService, private questionService: QuestionService, private responseService: ResponseService, private router: Router){}

  ngOnInit(): void {
    this.loadAssignement();
  }

  public loadAssignement(){
this.questionService.getQuestion().subscribe((data: any) => {
      this.questions = data.content;
    })
this.responseService.getResponse().subscribe((datta)=>{
  this.responses = datta;
}
)
  }


  onSubmit(): void {
      
const newAssignement = {
  point: this.point,
  question_id: this.question_id,
  response_id:this.response_id
}

  this.serviceAssignement.addAssignement(newAssignement).subscribe(() => {
    console.log('Question added successfully:', newAssignement);
    this.router.navigate(['assignement-component']);
  });

    }


    public selectQuestion(id: number| null): void{
      if(id !== null){
        this.question_id = id;
      }
     this.isDropdownQuestionOpen = false;
    }

    public selectResponse(id: number| null): void{
      if(id !== null){
        this.response_id = id;
      }
           this.isDropdownResponseOpen = false;

    }




  isDropdownQuestionOpen = false;
  isDropdownResponseOpen = false;


  toggleDropdownQuestion() {
    this.isDropdownQuestionOpen = !this.isDropdownQuestionOpen;
  }
  toggleDropdownResponse() {
    this.isDropdownResponseOpen = !this.isDropdownResponseOpen;
  }

}
