import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'src/app/models/subject';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {
 
  subjects: Subject[] = [];
  
  title: string= '';
  
    constructor(private subjectService: SubjectService, private router: Router) {}


    onSubmit(): void {
      if (!this.title) {
        alert('Please add a title');
        return;
      }
  
      let newSubject: Subject = {
        title: this.title,
      };
     

     this.subjectService.addSubject(newSubject).subscribe();
      console.log(newSubject);
          this.router.navigate(['subject-component']);
      
    }

    private loadSubjects(): void {
    this.subjectService.getSubject().subscribe((data) => {
      this.subjects = data;
      console.log(this.subjects);
    });
  }


  ngOnInit(): void {
    this.loadSubjects();
  }


  
}
