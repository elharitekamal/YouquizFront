import { Component, OnInit } from '@angular/core';
import { Answer } from 'src/app/models/answer';
import { AssignementRes } from 'src/app/models/assignementRes';
import { QuestionRes } from 'src/app/models/questionRes';
import { AssignementService } from 'src/app/services/assignement.service';
import { QuestionService } from 'src/app/services/question.service';
import { ResponseService } from 'src/app/services/response.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-assignement',
  templateUrl: './assignement.component.html',
  styleUrls: ['./assignement.component.css']
})
export class AssignementComponent implements OnInit {

  assignements: AssignementRes[] = [];
  questions: QuestionRes[] = [];
  responses: Answer[] = [];



  constructor(private serviceAssignement: AssignementService, private questionService: QuestionService, private responseService: ResponseService){}

  ngOnInit(): void {
    this.loadAssignement();
  }

  public loadAssignement(){
  this.serviceAssignement.getAssignement().subscribe((data)=>{
    this.assignements = data;
  });
this.questionService.getQuestion().subscribe((data=>{
  this.questions = data;
  }));
this.responseService.getResponse().subscribe((data)=>{
  this.responses = data;
}
)
  }

  public deleteAssignement(id: number): void {
  Swal.fire({
    title: 'Do you want to delete it ?',
    showDenyButton: true,
    confirmButtonText: 'Save',
    denyButtonText: `Don't save`,
  }).then((result) => {
    if (result.isConfirmed) {
      this.serviceAssignement.deleteAssignement(id).subscribe(
        () => {
          console.log(`Response with id ${id} deleted successfully.`);
          this.loadAssignement();
        },
        (error) => {
          console.error(`Error deleting response with id ${id}:`, error);
        }
      );
      }
  });
}

}
