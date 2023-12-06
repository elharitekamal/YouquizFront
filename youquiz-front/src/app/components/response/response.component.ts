import { Component, OnInit } from '@angular/core';
import { Answer } from 'src/app/models/answer';
import { ResponseService } from 'src/app/services/response.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit{

  responses: Answer[] = [];

  constructor(private responseService: ResponseService){}
  ngOnInit(): void {
    this.loadResponse();
  }


  public loadResponse(): void{
    this.responseService.getResponse().subscribe((data)=>
    { this.responses = data;
    });
  }

 public deleteResponse(id: number): void {
  Swal.fire({
    title: 'Do you want to delete it ?',
    showDenyButton: true,
    confirmButtonText: 'Save',
    denyButtonText: `Don't save`,
  }).then((result) => {
    if (result.isConfirmed) {
      this.responseService.deleteResponse(id).subscribe(
        () => {
          console.log(`Response with id ${id} deleted successfully.`);
          this.loadResponse();
        },
        (error) => {
          console.error(`Error deleting response with id ${id}:`, error);
        }
      );
      }
  });
}

  
}
