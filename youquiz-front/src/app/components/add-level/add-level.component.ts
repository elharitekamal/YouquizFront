import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Level } from 'src/app/models/level';
import { LevelService } from 'src/app/services/level.service';


@Component({
  selector: 'app-add-level',
  templateUrl: './add-level.component.html',
  styleUrls: ['./add-level.component.css']
})
export class AddLevelComponent implements OnInit {

  levels: Level [] = [];
  
  description: string = '';
  pointMin: number = 0;
  pointMax: number = 0;
  

  constructor(private levelService: LevelService, private router: Router) {}


    onSubmit(): void {
      if (!this.description) {
        alert('Please add a description');
        return;
      }
  
      const newLevel = {
        description: this.description,
        pointMin: this.pointMin,
        pointMax: this.pointMax,
      };
     
  
     this.levelService.addLevel(newLevel).subscribe()
      console.log(newLevel);
        this.router.navigate(['level-component']);

      
    }

  ngOnInit(): void {
  }
  
}

