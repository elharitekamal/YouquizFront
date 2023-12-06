import { Component, OnInit } from '@angular/core';
import { Level } from 'src/app/models/level';
import { LevelService } from 'src/app/services/level.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.css']
})


export class LevelComponent implements OnInit {
  levels: Level[] = [];

  constructor(private levelService: LevelService) {}

  ngOnInit(): void {
    this.loadLevels();
  }

  private loadLevels(): void {
    this.levelService.getLevel().subscribe((data) => {
      this.levels = data;
      console.log(this.levels);
    });
  }


  public deleteLevel(id: number): void {
  Swal.fire({
    title: 'Do you want to delete it ?',
    showDenyButton: true,
    confirmButtonText: 'Save',
    denyButtonText: `Don't save`,
  }).then((result) => {
    if (result.isConfirmed) {
      this.levelService.deleteLevel(id).subscribe(
        () => {
          console.log(`Response with id ${id} deleted successfully.`);
          this.loadLevels();
        },
        (error) => {
          console.error(`Error deleting response with id ${id}:`, error);
        }
      );
      }
  });
}


}

