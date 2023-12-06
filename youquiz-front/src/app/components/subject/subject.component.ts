import { Component, OnInit } from '@angular/core';
import { Subject } from 'src/app/models/subject';
import { SubjectRes } from 'src/app/models/subjectRes';
import { SubjectService } from 'src/app/services/subject.service';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  subjects: Subject [] = [];
  subjectsRes: SubjectRes [] = [];

  constructor(private subjectService: SubjectService){}

  ngOnInit(): void {
this.loadSubjects();
  }

  private loadSubjects(): void {
    this.subjectService.getSubject().subscribe((data) => {
      this.subjectsRes = data;
      console.log(this.subjects);
    });
  }


//   public deleteSubject(id: number): void{

// const subject: Subject = {
//     id,
//     title: '',
//   }; 
  
//   this.subjectService.deleteSubject(subject).subscribe(
//     () => {
//       this.subjects = this.subjects.filter((subject) => subject.id !== id);
//       console.log(`Level with id ${id} deleted successfully.`);
//       this.loadSubjects();
//     },
//     (error) => {
//       console.error(`Error deleting level with id ${id}:`, error);
//     }
//   );

//   }

  public deleteSubject(id: number): void {
  Swal.fire({
    title: 'Do you want to delete it ?',
    showDenyButton: true,
    confirmButtonText: 'Save',
    denyButtonText: `Don't save`,
  }).then((result) => {
    if (result.isConfirmed) {
      this.subjectService.deleteSubject(id).subscribe(
        () => {
          console.log(`Response with id ${id} deleted successfully.`);
          this.loadSubjects();
        },
        (error) => {
          console.error(`Error deleting response with id ${id}:`, error);
        }
      );
      }
  });
}

}
