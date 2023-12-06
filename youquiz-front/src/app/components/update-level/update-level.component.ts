import { Component, OnInit } from '@angular/core';
import { Level } from 'src/app/models/level';
import { LevelService } from 'src/app/services/level.service';

@Component({
  selector: 'app-update-level',
  templateUrl: './update-level.component.html',
  styleUrls: ['./update-level.component.css']
})
export class UpdateLevelComponent implements OnInit {

    levels: Level[] = [];


  constructor(levelService: LevelService){}

  ngOnInit(): void {
    
  }

  



}
