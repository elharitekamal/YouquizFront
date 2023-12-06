import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from 'src/app/models/question';
import { QuestionRes } from 'src/app/models/questionRes';
import Swal from 'sweetalert2';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  questions: QuestionRes[] = [];

  constructor(private questinservice: QuestionService, private router: Router){}

  ngOnInit(): void {
  this.loadQuestion();
    
  }

  private loadQuestion(): void {
  this.questinservice.getQuestion().subscribe((data: any) => {
      this.questions = data.content;
    })
}


public deleteQuestion(id: number): void {
  Swal.fire({
    title: 'Do you want to delete it ?',
    showDenyButton: true,
    confirmButtonText: 'Save',
    denyButtonText: `Don't save`,
  }).then((result) => {
    if (result.isConfirmed) {
      this.questinservice.deleteQuestion(id).subscribe(
        () => {
          console.log(`Response with id ${id} deleted successfully.`);
          this.loadQuestion();
        },
        (error) => {
          console.error(`Error deleting response with id ${id}:`, error);
        }
      );
      }
  });
}




}
