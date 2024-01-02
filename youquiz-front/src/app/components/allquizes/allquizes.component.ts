import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Test } from 'src/app/models/test';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-allquizes',
  templateUrl: './allquizes.component.html',
  styleUrls: ['./allquizes.component.css']
})
export class AllquizesComponent implements OnInit{

  tests: Test[] = [];
  

  constructor(private testService: TestService, private router: Router){}

  ngOnInit(): void {
    this.loadAllQuizez();
  }

  loadAllQuizez(){
    this.testService.getAllTest().subscribe((data: any)=>{
      this.tests = data.content;
    })
  }


 gotToTest(id: number | undefined): void {
  this.router.navigateByUrl(`quiz-component/${id}`);
}



}
