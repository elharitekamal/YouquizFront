import { Component, OnInit } from '@angular/core';
import { RouteReuseStrategy, Router, RouterLink } from '@angular/router';
import { text } from '@fortawesome/fontawesome-svg-core';
import { Subject } from 'rxjs';
import { Level } from 'src/app/models/level';
import { QuestionReq } from 'src/app/models/responseReq';
import { SubjectRes } from 'src/app/models/subjectRes';
import { LevelService } from 'src/app/services/level.service';
import { QuestionService } from 'src/app/services/question.service';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-quest.component.html',
  styleUrls: ['./add-quest.component.css']
})
export class AddQuestionComponent implements OnInit {


  levels: Level[] = [];
  subjectsRes: SubjectRes [] = [];
  questions: QuestionReq[] = [];

  numberOfResponses: number = 0;
  numberOfCorrectResponses: number = 0;
  questionText: string = '';
  type: string = '';
  subject_id: number = 0;
  level_id: number = 0;

  


 constructor(private subjectService: SubjectService, private levelService: LevelService, private questionService:  QuestionService, private router: Router){}


 onSubmit(): void {
      
const newQuestion = {
  numberOfResponses: this.numberOfResponses,
  numberOfCorrectResponses: this.numberOfCorrectResponses,
  questionText: this.questionText,
  type:  this.type,
  subject_id: this.subject_id,
  level_id:this.level_id
}

this.questionService.addQuestion(newQuestion).subscribe(() => {
    console.log('Question added successfully:', newQuestion);
    this.router.navigate(['question-component']);
  });

    }


ngOnInit(): void {
  this.loadData();
}


selectSubject(id: number | null): void {
    if (id !== null) {
      this.subject_id = id;
        this.isDropdownSubjectOpen = false;

      
    }
  }

  
selectLevel(id: number | null): void {
    if (id !== null) {
      this.level_id = id;
        this.isDropdownLevelOpen = false;

    }
  }


  selectType(type: string | null): void {
    if (type !== null) {
      this.type = type;
     this.isDropdownTypeOpen = false;

    }
  }
  
  


private loadData(): void {
    this.subjectService.getSubject().subscribe((data) => {
      this.subjectsRes = data;
      console.log(this.subjectsRes);
    });

     this.levelService.getLevel().subscribe((data) => {
      this.levels = data;
      console.log(this.levels);
    });
  }











  isDropdownTypeOpen = false;
  isDropdownSubjectOpen = false;
  isDropdownLevelOpen = false;


  toggleDropdownType() {
    this.isDropdownTypeOpen = !this.isDropdownTypeOpen;
  }
  toggleDropdownSubject() {
    this.isDropdownSubjectOpen = !this.isDropdownSubjectOpen;
  }
  toggleDropdownLevel() {
    this.isDropdownLevelOpen = !this.isDropdownLevelOpen;
  }
}
