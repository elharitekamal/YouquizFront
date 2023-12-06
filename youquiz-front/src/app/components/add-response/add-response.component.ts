import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Answer } from 'src/app/models/answer';
import { ResponseService } from 'src/app/services/response.service';

@Component({
  selector: 'app-add-response',
  templateUrl: './add-response.component.html',
  styleUrls: ['./add-response.component.css']
})
export class AddResponseComponent {


  responses: Answer[] = [];
  
  textResponse: string= '';
  
    constructor(private responseService: ResponseService, private router: Router) {}


    onSubmit(): void {
      if (!this.textResponse) {
        alert('Please add a title');
        return;
      }
  
      let newResponse: Answer = {
        textResponse: this.textResponse,
      };
     

     this.responseService.addResponse(newResponse).subscribe();
      console.log(newResponse);
          this.router.navigate(['response-component']);
      
    }

    private loadSubjects(): void {
    this.responseService.getResponse().subscribe((data) => {
      this.responses = data;
      console.log(this.responses);
    });
  }


  ngOnInit(): void {
    this.loadSubjects();
  }

}
